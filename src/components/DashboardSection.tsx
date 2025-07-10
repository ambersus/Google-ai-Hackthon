import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const DashboardSection = () => {
  const projectionData = [
    { year: 2024, conservative: 8200000, likely: 8200000, aggressive: 8200000 },
    { year: 2030, conservative: 12000000, likely: 15000000, aggressive: 18000000 },
    { year: 2040, conservative: 25000000, likely: 32000000, aggressive: 41000000 },
    { year: 2050, conservative: 41000000, likely: 67000000, aggressive: 82000000 },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Financial Dashboard</h2>
      <p className="text-gray-600 mb-6">Your personal financial insights at a glance</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2 text-gray-800">Current Net Worth</h3>
          <p className="text-3xl font-bold text-blue-800">₹82L</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2 text-gray-800">Monthly Savings</h3>
          <p className="text-3xl font-bold text-green-700">₹45K</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-gray-800">Retirement Projection</h3>
        <LineChart width={700} height={300} data={projectionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="conservative" stroke="#1e40af" name="Conservative (5%)" />
          <Line type="monotone" dataKey="likely" stroke="#047857" name="Likely (7%)" />
          <Line type="monotone" dataKey="aggressive" stroke="#1d4ed8" name="Aggressive (9%)" />
        </LineChart>
      </div>
    </div>
  )
}

export default DashboardSection