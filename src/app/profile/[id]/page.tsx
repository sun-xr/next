export default function UseProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Profile</h1>
      <hr />
      <p className="text-2xl font-bold">profile page{params.id}</p>
    </div>
  );
}
