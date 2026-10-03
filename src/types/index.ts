export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  status: "concluido" | "em-andamento" | "planejado";
  image?: string;
  github?: string;
  demo?: string;
};