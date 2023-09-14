"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css'
import { BASE_URL } from '@/utils/constants';


export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function updateProjectsData() {
      try {
        const response = await axios.get(`${BASE_URL}/api/projects/`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    }
    updateProjectsData();
  }, []);

  function colorOfTechnology(id: number) {
    switch (id) {
      case 1:
        return 'text-gray-100 bg-[#512BD4] border-[#6c45f5]'
      case 2:
        return 'text-gray-100 bg-[#6c45f5] border-[#8e47ff]'
      case 3:
        return 'text-gray-100 bg-[#2996b3] border-[#61DBFB]'
      case 4:
        return 'text-gray-100 bg-[#050505] border-[#f0f0f0]'
      case 5:
        return 'text-[#323330] bg-[#F0DB4F] border-[#323330]'
      case 6:
        return 'text-gray-100 bg-[#007acc] border-[#f0f0f0]'
      case 7:
        return 'text-gray-300 bg-[#3C873A] border-[#68A063]'
      case 8:
        return 'text-gray-100 bg-[#E34C26] border-[#F06529]'
      case 9:
        return 'text-gray-100 bg-[#264de4] border-[#2965f1]'
      case 10:
        return 'text-[#0f0f0f] bg-[#dedede] border-[#c41818]'
      default:
        return 'border-#22a4f5 bg-#00609c'
    }
  }
  return (
    <div className="container mx-auto px-4">
      <div className="masonry">
        {projects.map((project) => (
          <div key={project.id} className="masonry-item h-auto bg-#4c4e54 border-#dbdbdb border-2 rounded-md">
            {/* Render your project card or component here */}
            {/* Example card structure */}
            <div className="shadow rounded p-4">
              <h2 className="text-gray-100 text-lg font-semibold">{project.name}</h2>
              {project.category && (<p className="text-gray-200">{project.category}</p>)}
              <p className="w-full flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span key={tech.id} className={`border-2 rounded-xl ${colorOfTechnology(tech.id)} m-1 p-1 hvr hvr-grow transition-colors`}>
                    {tech.name}
                  </span>
                ))}
              </p>
              <img className='w-full object-cover mb-4 border-gray-400 border-2 rounded-sm' src={`${BASE_URL}/${project.thumbnail}`}></img>
              {/* Add more project details */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};