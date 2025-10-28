export async function wakeServer() {
  const endpoint = 'https://cestificacoesiso-back.onrender.com/';

  try {
    console.log('Acordando o servidor...');
    const response = await fetch(endpoint);
    console.log('Servidor acordado:', response.status);
  } catch (error) {
    console.warn('Falha ao acordar o servidor:', error);
  }
}
