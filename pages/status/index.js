import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

function Status() {
  const { data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  const updatedAt = data
    ? new Date(data.updated_at).toLocaleTimeString("pt-BR")
    : "carregando...";
  const database = data?.dependencies.database;

  return (
    <>
      <h1>Status</h1>
      <div>Última atualização: {updatedAt}</div>
      <h2>Database</h2>
      {database ? (
        <>
          <div>Versão: {database.version}</div>
          <div>Conexões máximas: {database.max_connections}</div>
          <div>Conexões abertas: {database.opened_connections}</div>
        </>
      ) : (
        <div>carregando...</div>
      )}
    </>
  );
}

export default function StatusPage() {
  return <Status />;
}
