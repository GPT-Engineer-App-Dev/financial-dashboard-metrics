import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$0.00</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$0.00</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Profit</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$0.00</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">N/A</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;