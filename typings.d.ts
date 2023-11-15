interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface File {
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  name: string;
  summary: string;
  address: string;
  email: string;
  phoneNumber: string;
  profileImage: Image;
  heroImage: Image;
  role: string;
  facts: Fact[];
  cv: File;
  cvUrl: string;
  adjectives: string[];
}

interface Project extends SanityBody {
  _type: 'project';
  name: string;
  description: string;
  deployedUrl: string;
  githubUrl: string;
  technologies: Skill[];
  image: Image;
}

interface Skill extends SanityBody {
  _type: 'skill';
  name: string;
  svg: string;
  level: number;
  color: string;
}

interface Fact extends SanityBody {
  _type: 'fact';
  title: string;
  description: string;
}

interface Experience extends SanityBody {
  _type: 'experience';
  title: string;
  subtitle: string;
  description: string;
  date: string;
  iconType: string;
}
