
export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  contacts: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Hackathon {
  name: string;
  status: 'Won' | 'Participating' | 'Upcoming';
  description: string;
  year: string;
}
