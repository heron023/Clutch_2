'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const tooltipStyle = {
  background: 'oklch(0.185 0.013 260)',
  border: '1px solid oklch(0.28 0.013 260)',
  borderRadius: 12,
  fontSize: 12,
  color: 'oklch(0.97 0.005 250)',
  padding: '8px 12px',
}

export function TrendArea({
  data,
  color = 'var(--color-chart-1)',
  height = 120,
  showAxis = false,
}: {
  data: { label: string; value: number }[]
  color?: string
  height?: number
  showAxis?: boolean
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 6, right: 6, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        {showAxis && <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.013 260)" vertical={false} />}
        {showAxis && (
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: 'oklch(0.66 0.015 255)', fontSize: 12 }} />
        )}
        {showAxis && <YAxis tickLine={false} axisLine={false} tick={{ fill: 'oklch(0.66 0.015 255)', fontSize: 12 }} width={32} />}
        <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: color, strokeOpacity: 0.3 }} />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2.5}
          fill={`url(#grad-${color})`}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function MultiLine({
  data,
  lines,
  height = 280,
}: {
  data: Record<string, number | string>[]
  lines: { key: string; color: string; name: string }[]
  height?: number
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 6, right: 6, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.013 260)" vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: 'oklch(0.66 0.015 255)', fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: 'oklch(0.66 0.015 255)', fontSize: 12 }} width={32} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: 'oklch(0.5 0.02 260)', strokeOpacity: 0.3 }} />
        {lines.map((l) => (
          <Line
            key={l.key}
            type="monotone"
            dataKey={l.key}
            name={l.name}
            stroke={l.color}
            strokeWidth={2.5}
            dot={false}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

export function BarChartSimple({
  data,
  color = 'var(--color-chart-1)',
  height = 280,
  colorByValue,
}: {
  data: { label: string; value: number }[]
  color?: string
  height?: number
  colorByValue?: (v: number) => string
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 6, right: 6, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.013 260)" vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: 'oklch(0.66 0.015 255)', fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: 'oklch(0.66 0.015 255)', fontSize: 12 }} width={32} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'oklch(0.5 0.02 260)', fillOpacity: 0.08 }} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} fill={color} isAnimationActive={false}>
          {colorByValue && data.map((d, i) => <Cell key={i} fill={colorByValue(d.value)} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ScoreRadial({
  value,
  color = 'var(--color-chart-1)',
  height = 200,
}: {
  value: number
  color?: string
  height?: number
}) {
  const data = [{ name: 'score', value }]
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadialBarChart
        innerRadius="74%"
        outerRadius="100%"
        data={data}
        startAngle={90}
        endAngle={-270}
        barSize={14}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar
          background={{ fill: 'oklch(0.26 0.015 260)' }}
          dataKey="value"
          cornerRadius={8}
          fill={color}
          angleAxisId={0}
          isAnimationActive={false}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}
