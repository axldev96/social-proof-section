export default async function db() {
  try {
    const req = await fetch('./data.json');
    const res = await req.json();

    return res;
  } catch (error) {
    console.log(error);
  }
}
