import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { javafxAppContent } from "./javafx_app"
import { deliverySystemContent } from "./delivery_system"
import { iotProjectContent } from "./iot_project"

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) {
        return {
            title: "Project Not Found",
        }
    }
    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    const isDeliveryProject = slug === "delivery-automation-system"
    const isJavafxProject = slug === "javafx-management-application"
    const isIotProject = slug === "smart-home-iot-platform"

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/#projects">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Button>
                </Link>

                <div className="space-y-8 animate-fade-in-up">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            {project.title}
                        </h1>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>

                        <div className="my-12 p-6 bg-card rounded-xl border shadow-sm">
                            {isJavafxProject ? (
                                <div className="space-y-8">
                                    <section className="space-y-3">
                                        <h2 className="text-2xl font-semibold">{javafxAppContent.heading}</h2>
                                        <p className="text-muted-foreground leading-relaxed">{javafxAppContent.intro}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">What It Is</h3>
                                        <p className="text-card-foreground/80 leading-relaxed">{javafxAppContent.whatItIs}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Core Capabilities</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {javafxAppContent.capabilities.map((capability) => (
                                                <li key={capability}>{capability}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Technical Architecture</h3>
                                        <div className="overflow-x-auto rounded-lg border">
                                            <table className="w-full text-left border-collapse">
                                                <thead className="bg-muted/50">
                                                    <tr>
                                                        <th className="px-4 py-2 border-b">Layer</th>
                                                        <th className="px-4 py-2 border-b">Technology</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {javafxAppContent.architectureRows.map(([layer, technology]) => (
                                                        <tr key={layer}>
                                                            <td className="px-4 py-2 border-b">{layer}</td>
                                                            <td className="px-4 py-2 border-b">{technology}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="text-card-foreground/80 leading-relaxed">{javafxAppContent.architectureNote}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Data Model Summary</h3>
                                        <pre className="p-4 rounded-lg bg-muted text-sm overflow-x-auto">
                                            <code>{javafxAppContent.dataModelLines.join("\n")}</code>
                                        </pre>
                                        <p className="text-card-foreground/80">{javafxAppContent.supportTables}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Notable Details</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {javafxAppContent.notableDetails.map((detail) => (
                                                <li key={detail}>{detail}</li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            ) : isDeliveryProject ? (
                                <div className="space-y-8">
                                    <section className="space-y-3">
                                        <h2 className="text-2xl font-semibold">{deliverySystemContent.heading}</h2>
                                        <p className="text-muted-foreground leading-relaxed">{deliverySystemContent.intro}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Project Overview</h3>
                                        <p className="text-card-foreground/80 leading-relaxed">{deliverySystemContent.overview}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Technology Stack</h3>
                                        <div className="overflow-x-auto rounded-lg border">
                                            <table className="w-full text-left border-collapse">
                                                <thead className="bg-muted/50">
                                                    <tr>
                                                        <th className="px-4 py-2 border-b">Layer</th>
                                                        <th className="px-4 py-2 border-b">Technology</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {deliverySystemContent.stackRows.map(([layer, technology]) => (
                                                        <tr key={layer}>
                                                            <td className="px-4 py-2 border-b">{layer}</td>
                                                            <td className="px-4 py-2 border-b">{technology}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Architecture Layers</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {deliverySystemContent.architecture.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Key Features</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {deliverySystemContent.keyFeatures.map((feature) => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Offline Functionality</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {deliverySystemContent.offlineStrategy.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                        <h4 className="text-lg font-semibold pt-2">Offline Limitations</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {deliverySystemContent.offlineLimitations.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Data Collections</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {deliverySystemContent.collections.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Conclusion</h3>
                                        <p className="text-card-foreground/80 leading-relaxed">
                                            {deliverySystemContent.conclusion}
                                        </p>
                                    </section>
                                </div>
                            ) : isIotProject ? (
                                <div className="space-y-8">
                                    <section className="space-y-3">
                                        <h2 className="text-2xl font-semibold">{iotProjectContent.heading}</h2>
                                        <p className="text-muted-foreground leading-relaxed">{iotProjectContent.subtitle}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Abstract</h3>
                                        <p className="text-card-foreground/80 leading-relaxed">{iotProjectContent.abstract}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Project Goals</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.goals.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Operation Mode</h3>
                                        <p className="text-card-foreground/80 leading-relaxed">{iotProjectContent.operatingMode}</p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">System Architecture</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.architecture.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Mathematical & Control Model</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.modelHighlights.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">State Variable</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.stateVariable.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Core Equations</h3>
                                        <pre className="p-4 rounded-lg bg-muted text-sm overflow-x-auto">
                                            <code>
                                                Water balance: {iotProjectContent.equations.waterBalance}
                                                {"\n"}
                                                ET prediction: {iotProjectContent.equations.evapotranspiration}
                                                {"\n"}
                                                Drainage: {iotProjectContent.equations.drainage}
                                                {"\n"}
                                                Sensor measurement: {iotProjectContent.equations.delayMeasurement}
                                                {"\n"}
                                                Delay correction: {iotProjectContent.equations.delayCorrection}
                                                {"\n"}
                                                Target moisture: {iotProjectContent.equations.targetMoisture}
                                                {"\n"}
                                                Irrigation demand: {iotProjectContent.equations.irrigationNeed}
                                                {"\n"}
                                                Actuator command: {iotProjectContent.equations.valveTime}
                                            </code>
                                        </pre>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Hysteresis Control Law</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.controlLaw.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Closed-Loop Operation</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.closedLoopSteps.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Performance Objectives</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.performanceObjectives.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Stability Notes</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.offlineAndStabilityNotes.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Implementation Strategy</h3>
                                        <p className="text-card-foreground/80 leading-relaxed">
                                            {iotProjectContent.implementationNote}
                                        </p>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Practical Prototype Stack</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-card-foreground/80">
                                            {iotProjectContent.practicalStack.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="space-y-3">
                                        <h3 className="text-xl font-semibold">Conclusion</h3>
                                        <p className="text-card-foreground/80 leading-relaxed">
                                            {iotProjectContent.conclusion}
                                        </p>
                                    </section>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                                    <p className="text-card-foreground/80 leading-relaxed">
                                        {project.longDescription}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
