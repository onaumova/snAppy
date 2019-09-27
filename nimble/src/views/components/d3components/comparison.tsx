import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface Asset {
    name: string;
    size: number;
    chunks: number[];
    chunkNames: string[];
}

interface Props { 
    preOptStats?: Asset[];
    postOptStats?: Asset[];
}