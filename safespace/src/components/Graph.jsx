import * as React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../components/Graph.css'; 
import Navbar from '../components/Navbar';
import Button from "@mui/material/Button";
import { useNavigate, useParams } from 'react-router-dom';




const barData = [
  { name: 'Sante Mentale', value: 85 },
  { name: 'Sante Physique', value: 90 },
  { name: 'Confort au Travail', value: 80 },
];

const lineData = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
];

const pieData = [
  { name: 'Satisfaction', value: 400 },
  { name: 'Insatisfaction', value: 300 },
  { name: 'Neutre', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function Graph() {
    const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <Box className="graph-container">
    <Button
          variant="contained"
          color='success'
          onClick={() => navigate('/dashboard')} 
          sx={{ mt: 4 }}
        >
          retour
        </Button>

      <Box className="chart-container">
        <Typography variant="h5" className="chart-title">
          Graphique à Barres
        </Typography>
        <BarChart width={600} height={300} data={barData} className="chart">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </Box>

      <Box className="chart-container">
        <Typography variant="h5" className="chart-title">
          Graphique Linéaire
        </Typography>
        <LineChart width={600} height={300} data={lineData} className="chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </Box>

      <Box className="chart-container">
        <Typography variant="h5" className="chart-title">
          Graphique à Secteurs
        </Typography>
        <PieChart width={600} height={300} className="chart">
          <Pie
            data={pieData}
            cx={300}
            cy={150}
            labelLine={false}
            label={entry => entry.name}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </Box>
    </Box>
    </>
  );
}

export default Graph;
