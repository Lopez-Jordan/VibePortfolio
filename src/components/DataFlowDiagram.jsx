import React from 'react';

const DataFlowDiagram = () => {
  return (
    <svg width="800" height="400" viewBox="0 0 800 400" className="data-flow-diagram">
      {/* Define gradient for the professional look */}
      <defs>
        <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a242e', stopOpacity: 0.9 }} />
          <stop offset="100%" style={{ stopColor: '#0f1923', stopOpacity: 0.9 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Flow Components */}
      {/* SharePoint */}
      <g transform="translate(50, 50)">
        <rect width="120" height="60" rx="8" fill="url(#boxGradient)" stroke="#445877" strokeWidth="2"/>
        <text x="60" y="35" textAnchor="middle" fill="#ffffff" fontSize="14">SharePoint</text>
      </g>

      {/* S3 */}
      <g transform="translate(250, 50)">
        <rect width="120" height="60" rx="8" fill="url(#boxGradient)" stroke="#445877" strokeWidth="2"/>
        <text x="60" y="35" textAnchor="middle" fill="#ffffff" fontSize="14">AWS S3</text>
      </g>

      {/* EventBridge */}
      <g transform="translate(450, 50)">
        <rect width="120" height="60" rx="8" fill="url(#boxGradient)" stroke="#445877" strokeWidth="2"/>
        <text x="60" y="35" textAnchor="middle" fill="#ffffff" fontSize="14">EventBridge</text>
      </g>

      {/* Lambda */}
      <g transform="translate(450, 170)">
        <rect width="120" height="60" rx="8" fill="url(#boxGradient)" stroke="#445877" strokeWidth="2"/>
        <text x="60" y="35" textAnchor="middle" fill="#ffffff" fontSize="14">Lambda</text>
      </g>

      {/* CloudWatch */}
      <g transform="translate(250, 170)">
        <rect width="120" height="60" rx="8" fill="url(#boxGradient)" stroke="#445877" strokeWidth="2"/>
        <text x="60" y="35" textAnchor="middle" fill="#ffffff" fontSize="14">CloudWatch</text>
      </g>

      {/* Splunk */}
      <g transform="translate(50, 170)">
        <rect width="120" height="60" rx="8" fill="url(#boxGradient)" stroke="#445877" strokeWidth="2"/>
        <text x="60" y="35" textAnchor="middle" fill="#ffffff" fontSize="14">Splunk</text>
      </g>

      {/* External Vendor */}
      <g transform="translate(50, 290)">
        <rect width="120" height="60" rx="8" fill="url(#boxGradient)" stroke="#445877" strokeWidth="2"/>
        <text x="60" y="35" textAnchor="middle" fill="#ffffff" fontSize="14">External Vendor</text>
      </g>

      {/* Arrows */}
      {/* Vendor to SharePoint */}
      <path d="M110 290 L110 110" stroke="#C4BA9D" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      
      {/* SharePoint to S3 */}
      <path d="M170 80 L250 80" stroke="#C4BA9D" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      
      {/* S3 to EventBridge */}
      <path d="M370 80 L450 80" stroke="#C4BA9D" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      
      {/* EventBridge to Lambda */}
      <path d="M510 110 L510 170" stroke="#C4BA9D" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      
      {/* Lambda to CloudWatch */}
      <path d="M450 200 L370 200" stroke="#C4BA9D" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      
      {/* CloudWatch to Splunk */}
      <path d="M250 200 L170 200" stroke="#C4BA9D" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

      {/* Arrow Marker */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#C4BA9D"/>
        </marker>
      </defs>

      {/* Flow Labels */}
      <text x="120" y="270" fill="#C4BA9D" fontSize="12" textAnchor="middle">1. MFT</text>
      <text x="210" y="60" fill="#C4BA9D" fontSize="12" textAnchor="middle">2. Publish</text>
      <text x="410" y="60" fill="#C4BA9D" fontSize="12" textAnchor="middle">3. Trigger</text>
      <text x="530" y="140" fill="#C4BA9D" fontSize="12" textAnchor="middle">4. Execute</text>
      <text x="410" y="180" fill="#C4BA9D" fontSize="12" textAnchor="middle">5. Log</text>
      <text x="210" y="180" fill="#C4BA9D" fontSize="12" textAnchor="middle">6. Alert</text>
    </svg>
  );
};

export default DataFlowDiagram;
