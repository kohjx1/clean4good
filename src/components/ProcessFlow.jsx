import { useCallback, useState, useLayoutEffect } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  Position,
} from 'reactflow';
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

const ProcessFlow = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Initial Application\nBackground, Photos, Documents' },
      position: isSmallScreen ? { x: 0, y: 0 } : { x: 250, y: 0 },
      sourcePosition: isSmallScreen ? Position.Bottom : Position.Right,
      targetPosition: isSmallScreen ? Position.Top : Position.Left,
      ...nodeDefaults,
      className: 'bg-white dark:bg-gray-700 shadow-md',
    },
    {
      id: '2',
      data: { label: 'Application Review\n(3-5 working days)' },
      position: isSmallScreen ? { x: 0, y: 100 } : { x: 250, y: 100 },
      sourcePosition: isSmallScreen ? Position.Bottom : Position.Right,
      targetPosition: isSmallScreen ? Position.Top : Position.Left,
      ...nodeDefaults,
      className: 'bg-white dark:bg-gray-700 shadow-md',
    },
    {
      id: '3',
      data: { label: 'Clarification Meeting\n(Zoom/Face-to-face)' },
      position: isSmallScreen ? { x: 0, y: 200 } : { x: 250, y: 200 },
      sourcePosition: isSmallScreen ? Position.Bottom : Position.Right,
      targetPosition: isSmallScreen ? Position.Top : Position.Left,
      ...nodeDefaults,
      className: 'bg-white dark:bg-gray-700 shadow-md',
    },
    {
      id: '4',
      data: { label: 'Site Visit Assessment' },
      position: isSmallScreen ? { x: 0, y: 300 } : { x: 250, y: 300 },
      sourcePosition: isSmallScreen ? Position.Bottom : Position.Right,
      targetPosition: isSmallScreen ? Position.Top : Position.Left,
      ...nodeDefaults,
      className: 'bg-white dark:bg-gray-700 shadow-md',
    },
    {
      id: '5',
      type: 'output',
      data: { label: 'Cleaning Service Begins' },
      position: isSmallScreen ? { x: 0, y: 400 } : { x: 250, y: 400 },
      sourcePosition: isSmallScreen ? Position.Bottom : Position.Right,
      targetPosition: isSmallScreen ? Position.Top : Position.Left,
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

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onInit = useCallback((reactFlowInstance) => {
    reactFlowInstance.fitView();
  }, []);

  return (
    <div style={{ height: isSmallScreen ? '600px' : '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        fitView
        className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
        minZoom={1}
        maxZoom={1}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default ProcessFlow;
