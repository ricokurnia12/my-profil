import { ReactNode } from 'react';

export interface ProjectTech {
  frontend: string[];
  backend: string[];
  server: string[];
  database: string[];
}

export interface ProjectImage {
  path: string;
  description: string;
}

export interface ProjectData {
  name: string;
  tech: ProjectTech;
  image?: ProjectImage[]; // optional karena tidak semua project punya image
  description: ReactNode;
}
