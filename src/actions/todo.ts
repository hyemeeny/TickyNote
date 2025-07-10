'use server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const createTodo = async (formData: {
  title: string;
  description: string | null;
}) => {
  try {
    const newTodo = {
      title: formData.title,
      description: formData.description ?? null,
      due_date: new Date().toISOString(),
      is_done: false,
      created_at: new Date().toISOString(),
    };

    const response = await fetch(`${supabaseUrl}/rest/v1/todos`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify([newTodo]),
    });

    if (!response.ok) {
      throw new Error(`Failed to insert todo: ${response.statusText}`);
    }

    const inserted = await response.json();
    console.log('Inserted todo:', inserted);
    return inserted[0];
  } catch (error) {
    console.error('Error inserting todo:', error);
    throw new Error('Failed to insert todo');
  }
};
