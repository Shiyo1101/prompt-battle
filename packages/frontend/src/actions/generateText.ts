'use server';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080';

const generateText = async (prompt: string, theme?: string) => {
  const response = await fetch(`${SERVER_URL}/generate/text`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, theme }),
  });

  if (!response.ok) {
    throw new Error('エラーが発生しました。再度お試しください。');
  }

  const data = await response.json();

  return data.result;
};

export default generateText;
