"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const RADIUS = 0.55
const HEIGHT = 2.2
const TURNS = 1.45
const RIBBON_WIDTH = 0.60
const SEGS = 300
const EDGE_THICKNESS = 0.02

function SpiralRibbon() {
  const groupRef = useRef<THREE.Group>(null)
  const rotRef = useRef(-2.78)

  const { ribbonGeo, edgeGeos } = useMemo(() => {
    const positions: number[] = []
    const normalsArr: number[] = []
    const indices: number[] = []

    for (let i = 0; i <= SEGS; i++) {
      const u = i / SEGS
      const angle = -u * TURNS * Math.PI * 2
      const y = (u - 0.5) * HEIGHT
      const x = Math.cos(angle) * RADIUS
      const z = Math.sin(angle) * RADIUS

      const endZone = 0.04
      let hw = RIBBON_WIDTH * 0.5
      if (u < endZone) {
        const t = u / endZone
        hw = hw * Math.sqrt(1 - (1 - t) * (1 - t))
      } else if (u > 1 - endZone) {
        const t = (1 - u) / endZone
        hw = hw * Math.sqrt(1 - (1 - t) * (1 - t))
      }

      positions.push(x, y + hw, z)
      positions.push(x, y - hw, z)

      const nx = Math.cos(angle)
      const nz = Math.sin(angle)
      normalsArr.push(nx, 0, nz)
      normalsArr.push(nx, 0, nz)
    }

    for (let i = 0; i < SEGS; i++) {
      const a = i * 2
      const b = i * 2 + 1
      const c = (i + 1) * 2
      const d = (i + 1) * 2 + 1
      indices.push(a, b, c, b, d, c)
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    geo.setAttribute("normal", new THREE.Float32BufferAttribute(normalsArr, 3))
    geo.setIndex(indices)

    // Build edge strips
    function buildEdgeGeo(edgeIdx: number) {
      const ePos: number[] = []
      const eNorm: number[] = []
      const eIdx: number[] = []

      for (let i = 0; i <= SEGS; i++) {
        const vi = i * 2 + edgeIdx
        const px = positions[vi * 3]
        const py = positions[vi * 3 + 1]
        const pz = positions[vi * 3 + 2]
        const nx = normalsArr[vi * 3]
        const nz = normalsArr[vi * 3 + 2]
        ePos.push(px + nx * EDGE_THICKNESS, py, pz + nz * EDGE_THICKNESS)
        ePos.push(px - nx * EDGE_THICKNESS, py, pz - nz * EDGE_THICKNESS)
        const eny = edgeIdx === 0 ? 1 : -1
        eNorm.push(0, eny, 0)
        eNorm.push(0, eny, 0)
      }

      for (let i = 0; i < SEGS; i++) {
        const a = i * 2
        const b = i * 2 + 1
        const c = (i + 1) * 2
        const d = (i + 1) * 2 + 1
        eIdx.push(a, c, b, b, c, d)
      }

      const eGeo = new THREE.BufferGeometry()
      eGeo.setAttribute("position", new THREE.Float32BufferAttribute(ePos, 3))
      eGeo.setAttribute("normal", new THREE.Float32BufferAttribute(eNorm, 3))
      eGeo.setIndex(eIdx)
      return eGeo
    }

    return {
      ribbonGeo: geo,
      edgeGeos: [buildEdgeGeo(0), buildEdgeGeo(1)],
    }
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      rotRef.current += 0.008
      groupRef.current.rotation.y = rotRef.current
    }
  })

  return (
    <group ref={groupRef}>
      {/* Lavender front side */}
      <mesh geometry={ribbonGeo}>
        <meshStandardMaterial
          color={0xbdb8e4}
          roughness={0.25}
          metalness={0.08}
          side={THREE.FrontSide}
        />
      </mesh>
      {/* Coral back side */}
      <mesh geometry={ribbonGeo}>
        <meshStandardMaterial
          color={0xff6b6b}
          roughness={0.25}
          metalness={0.08}
          side={THREE.BackSide}
        />
      </mesh>
      {/* Edge strips */}
      {edgeGeos.map((geo, i) => (
        <mesh key={i} geometry={geo}>
          <meshStandardMaterial
            color={0x9b95cc}
            roughness={0.3}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

interface StraversoIconProps {
  className?: string
}

export function StraversoIcon({ className }: StraversoIconProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 32 }}
        gl={{ antialias: true, alpha: true, pixelRatio: Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio : 1) }}
        style={{ background: "transparent" }}
      >
        {/* Ambient */}
        <ambientLight intensity={0.4} color={0x404060} />
        {/* Key light */}
        <directionalLight position={[3, 3, 6]} intensity={0.85} color={0xffffff} />
        {/* Fill light */}
        <directionalLight position={[-4, -1, 4]} intensity={0.45} color={0xb0aae8} />
        {/* Back light */}
        <directionalLight position={[0, 1, -6]} intensity={0.5} color={0xff9080} />
        {/* Top point light */}
        <pointLight position={[0, 5, 2]} intensity={0.3} color={0xc0baf0} distance={10} />
        {/* Bottom point light */}
        <pointLight position={[0, -5, -2]} intensity={0.25} color={0xff8878} distance={10} />
        <SpiralRibbon />
      </Canvas>
    </div>
  )
}
