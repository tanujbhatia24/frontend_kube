export async function getDashboardData() {
  try {
    const response = await fetch("/api/dashboard");
    return await response.json();
  } catch (error) {
    return [];
  }
}
