// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div >
//       welcome
//       <Button>Save it</Button>
//      </div>
//   );
// }

'use client'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { UserDetailContext } from "@/context/UserDetailsContext"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const user = UserDetailContext;
  ("user hai ki ni",user);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b">
        <div className="text-2xl font-bold">AiCruiter</div>
        <div className="flex gap-4">
          <Link href="/dashboard">
           <Button variant="outline" className=" cursor-pointer bg-primary text-white">Dashboard</Button></Link>
          
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-8">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
          Ready to Transform Your Hiring Process?
        </h1>
        <p className="text-xl text-muted-foreground max-w-xl">
          Join hundreds of companies already using AiCruiter to find the best talent.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Started for free</Button>
          <Button size="lg" variant="outline">
            Schedule a Demo
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How AiCruiter Works</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Three simple steps to transform your recruitment process
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Create Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set up your job requirements and customize interview questions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Share with Candidates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Send interview links to candidates to complete at their convenience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Review Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get AI-analyzed results, transcripts, and candidate comparisons.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Streamline Your Hiring Process</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            AiCruiter helps you save time and find better candidates with our advanced AI interview technology.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Save Time</h3>
              <p className="text-muted-foreground">
                Automate initial screening interviews and focus on final candidates.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Get detailed analytics and candidate comparisons based on interview responses.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Reduce Bias</h3>
              <p className="text-muted-foreground">
                Standardized interviews help eliminate unconscious bias in the hiring process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Interview Assistant for Modern Recruiters</h2>
          <p className="text-xl mb-8">
            Let our AI voice agent conduct candidate interviews while you focus on finding the perfect match. Save time, reduce bias, and improve your hiring process.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Create Interview
            </Button>
            <Button variant="secondary" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="text-xl font-bold mb-4 md:mb-0">AiCruiter</div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © 2025 AiCruiter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
