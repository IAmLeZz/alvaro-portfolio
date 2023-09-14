interface Technology {
    id: number;
    name: string;
    image: string;
}

interface PersonalInfo {
    description: string;
    image: string;
    resume: string;
}

interface Media {
    id: number;
    caption?: string;
    url?: string;
    type: string;
}

interface Project {
    id: number;
    name: string;
    client?: string;
    category?: string;
    description: string;   
    thumbnail: string;
    link?: string;
    repository?: string;
    technologies: Technology[];
    media: Media[];
}