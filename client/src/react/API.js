// import regeneratorRuntime from 'regenerator-runtime';

const API_URL = 'http://localhost:4000';

// export const listLogEntries = async () => {
//   const response = await fetch(`${API_URL}/api/logs`);
//   return response.json();
// };

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}
