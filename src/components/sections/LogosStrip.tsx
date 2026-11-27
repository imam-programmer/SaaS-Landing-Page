import { Container } from "@/components/ui/Container";

const companies = ["Acmecorp", "Globex", "Initech", "Umbrella", "Hooli", "Stark&Co"];

export function LogosStrip() {
  return (
    <section className="py-12">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500">
          Trusted by 2,000+ teams at fast-growing companies
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((name) => (
            <div
              key={name}
              className="text-center text-xl font-bold tracking-tight text-slate-300 transition-colors hover:text-slate-500"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}