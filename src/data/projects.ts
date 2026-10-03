import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "pipeline-localidade-ufes",
    title: "Pipeline de Dados de Localidade de Alunos — UFES",
    summary:
      "Pipeline de dados utilizando arquitetura Bronze/Silver/Gold para ingestão, tratamento, validação de qualidade e análise de dados de alunos da UFES.",
    tags: ["Python", "PySpark", "Databricks", "Power BI", "SQL"],
    status: "concluido",
    github: "https://github.com/GabyyRD/engenharia-dados-localidade-alunos-ufes",
    // image: "/projects/pipeline-ufes.png",
  },
  {
    slug: "dashboard-vertice-retail",
    title: "Dashboard Vértice Retail — Case Elogroup",
    summary:
      "Identificação de um problema comercial, tratamento e modelagem dos dados, construção de indicadores e dashboard em Power BI com geração de insights.",
    tags: ["Streamlit", "Google Colab", "Excel", "Python"],
    status: "concluido",
    github: "https://github.com/GabyyRD/vertice-dashboard",
    // image: "/projects/vertice-retail.png",
  },
  /*{
    slug: "monitor-precos-livros",
    title: "Monitor Automatizado de Preços de Livros",
    summary:
      "Projeto planejado para acompanhar o histórico de preços de livros a partir de APIs, com pipeline de ETL, armazenamento em banco de dados e, futuramente, um dashboard de visualização.",
    tags: ["Python", "APIs", "ETL", "Banco de Dados"],
    status: "planejado",
  },*/
];