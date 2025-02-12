import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/base.css';
import 'reactflow/dist/style.css';

const nodeDefaults = {
  style: {
    padding: '15px',
    borderRadius: '8px',
    width: 200,
    fontSize: '14px',
    color: 'inherit',
    border: 'none',
  },
};

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Initial Application\nBackground, Photos, Documents' },
    position: { x: 250, y: 0 },
    ...nodeDefaults,
    className: 'bg-white dark:bg-gray-700 shadow-md',
  },
  {
    id: '2',
    data: { label: 'Application Review\n(3-5 working days)' },
    position: { x: 250, y: 100 },
    ...nodeDefaults,
    className: 'bg-white dark:bg-gray-700 shadow-md',
  },
  {
    id: '3',
    data: { label: 'Clarification Meeting\n(Zoom/Face-to-face)' },
    position: { x: 250, y: 200 },
    ...nodeDefaults,
    className: 'bg-white dark:bg-gray-700 shadow-md',
  },
  {
    id: '4',
    data: { label: 'Site Visit Assessment' },
    position: { x: 250, y: 300 },
    ...nodeDefaults,
    className: 'bg-white dark:bg-gray-700 shadow-md',
  },
  {
    id: '5',
    type: 'output',
    data: { label: 'Cleaning Service Begins' },
    position: { x: 250, y: 400 },
    ...nodeDefaults,
    className: 'bg-white dark:bg-gray-700 shadow-md',
  },
];

const initialEdges = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    animated: true,
    style: { stroke: '#0ea5e9', strokeWidth: 2 },
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3', 
    animated: true,
    style: { stroke: '#0ea5e9', strokeWidth: 2 },
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4', 
    animated: true,
    style: { stroke: '#0ea5e9', strokeWidth: 2 },
  },
  { 
    id: 'e4-5', 
    source: '4', 
    target: '5', 
    animated: true,
    style: { stroke: '#0ea5e9', strokeWidth: 2 },
  },
];

export default function ProcessFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#0ea5e9', strokeWidth: 2 } }, eds)),
    [setEdges]
  );

  return (
    <div className="h-[600px] w-full bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-right"
        className="dark:text-gray-100"
      >
        <Background 
          gap={12} 
          size={1} 
          color="currentColor" 
          className="opacity-5"
        />
        <Controls className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600" />
        <MiniMap 
          className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
          nodeColor="currentColor"
          maskColor="rgb(255, 255, 255, 0.5)"
        />
      </ReactFlow>
    </div>
  );
}
