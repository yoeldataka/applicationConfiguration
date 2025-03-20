import React, { useEffect, useState } from 'react';
import { getAiClientCompanyList } from '../services/aiClientCompanyService'; // Asegúrate de que la ruta sea correcta

interface ClientCompany {
  id: string;
  name: string;
  business: string;
  values: string;
}

const ClientCompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<ClientCompany[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const result: any = await getAiClientCompanyList();
        setCompanies(result.data.listAiClientCompanies.items);
      } catch (err) {
        setError('Error al cargar las compañías');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Lista de Compañías Cliente</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <h3>{company.name}</h3>
            <p>Negocio: {company.business}</p>
            <p>Valores: {company.values}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientCompanyList;
