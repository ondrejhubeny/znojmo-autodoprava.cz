export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Vehicle {
  id: string;
  model: string;
  capacity: string;
  features: string[];
  image?: string;
}

export interface ContactInfo {
  owner: string;
  address: string;
  phones: string[];
  email: string;
  ico?: string;
}

