import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col items-center text-center">

            <Badge>Introducing FlowSync 2.0</Badge>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Your team's work.
              <span className="block bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                One powerful workspace.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Plan projects, manage tasks, and collaborate
              with your team — all from one beautifully
              organized workspace.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Start Free Trial
              </Button>

              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <p className="mt-5 text-sm text-muted">
              No credit card required · Free 14-day trial
            </p>

          </div>
        </Container>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <Container>
          <SectionHeading
            badge="Everything you need"
            title="Work smarter, not harder."
            description="Bring your projects, tasks, and team collaboration together in one powerful workspace."
          />
        </Container>
      </section>
    </main>
  );
}