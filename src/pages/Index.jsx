import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Welcome to the Financial Dashboard</h1>
      <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
    </main>
  );
}

export default Index;
