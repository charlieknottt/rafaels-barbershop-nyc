// In-memory services store (for demo purposes)

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  isActive: boolean;
  sortOrder: number;
}

// Initialize with default services
const defaultServices: Service[] = [
  { id: "regular-haircut", name: "Regular Haircut", description: "Classic precision cut tailored to your style", price: 43, duration: 30, isActive: true, sortOrder: 1 },
  { id: "shampoo-cut", name: "Shampoo & Cut", description: "Full shampoo followed by a precision haircut", price: 46, duration: 40, isActive: true, sortOrder: 2 },
  { id: "long-hair-scissor", name: "Long Hair / Scissor Cut", description: "Detailed scissor work for longer styles", price: 55, duration: 45, isActive: true, sortOrder: 3 },
  { id: "crew-cut", name: "Crew Cut", description: "Clean, classic short crew cut", price: 30, duration: 25, isActive: true, sortOrder: 4 },
  { id: "beard-trim", name: "Beard Trim", description: "Professional beard trim and grooming", price: 19, duration: 15, isActive: true, sortOrder: 5 },
  { id: "beard-trim-shapeup", name: "Beard Trim & Shape-Up", description: "Beard trim with precise edge shaping", price: 25, duration: 20, isActive: true, sortOrder: 6 },
  { id: "signature-shave", name: "Signature Shave & Face Massage", description: "Luxurious straight razor shave with relaxing face massage", price: 49, duration: 45, isActive: true, sortOrder: 7 },
  { id: "head-shave", name: "Head Shave & Massage", description: "Full head shave with soothing massage", price: 49, duration: 40, isActive: true, sortOrder: 8 },
  { id: "shape-up", name: "Shape-Up & Clean-Up", description: "Hairline edge-up and neckline cleanup", price: 21, duration: 15, isActive: true, sortOrder: 9 },
  { id: "clean-up-neckline", name: "Clean-Up Neckline", description: "Quick neckline cleanup and taper", price: 15, duration: 10, isActive: true, sortOrder: 10 },
];

// Global store
const services: Map<string, Service> = new Map(
  defaultServices.map((s) => [s.id, s])
);

export function getAllServices(): Service[] {
  return Array.from(services.values()).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getActiveServices(): Service[] {
  return getAllServices().filter((s) => s.isActive);
}

export function getServiceById(id: string): Service | undefined {
  return services.get(id);
}

export function updateService(id: string, updates: Partial<Service>): Service | null {
  const existing = services.get(id);
  if (!existing) return null;

  const updated = { ...existing, ...updates };
  services.set(id, updated);
  return updated;
}

export function addService(service: Service): Service {
  services.set(service.id, service);
  return service;
}

export function deleteService(id: string): boolean {
  return services.delete(id);
}
