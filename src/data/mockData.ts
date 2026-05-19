export interface Persona {
  id: string;
  name: string;
  role: string;
  avatar: string;
  experience: string;
  quote: string;
  description: string;
  goals: string[];
  painPoints: string[];
  tools: string[];
  mentalModel: string;
  journeyStep: string;
  observabilityLiteracy: number; // 1-100
}

export interface CompetitorAnalysis {
  name: string;
  logo: string;
  type: string;
  strengths: string[];
  weaknesses: string[];
  progressiveDisclosureRating: number; // 1-5
  searchRelevanceRating: number; // 1-5
  versioningUxRating: number; // 1-5
  discoveryPattern: string;
  takeaway: string;
}

export interface TelemetrySignal {
  name: string;
  type: 'metric' | 'span' | 'log';
  description: string;
  dataType?: string;
  unit?: string;
  attributes: {
    name: string;
    type: string;
    description: string;
    required: boolean;
    example: string;
  }[];
}

export interface ConfigOption {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
  environmentVariable: string;
  importance: 'critical' | 'optional';
}

export interface InstrumentationPackage {
  id: string;
  name: string;
  language: string;
  category: 'backend' | 'frontend' | 'infrastructure' | 'messaging';
  stability: 'stable' | 'beta' | 'deprecated';
  version: string;
  downloads: string;
  stars: number;
  description: string;
  setupComplexity: 'low' | 'medium' | 'high';
  signals: TelemetrySignal[];
  configurations: ConfigOption[];
  supportedVersions: {
    runtime: string;
    library: string;
  }[];
  dependencies: string[];
  coverageScore: number; // 1-100
}

export const personas: Persona[] = [
  {
    id: "persona-app-dev",
    name: "Alex Rivera",
    role: "Senior Application Developer",
    avatar: "AR",
    experience: "8+ years in Node.js & React",
    quote: "I just want to import the library and see where my SQL queries are slowing down. I shouldn't need a PhD in distributed tracing to write a basic configuration.",
    description: "Alex builds user-facing features in a fast-paced microservice environment. Observability is a task they are forced to do rather than their primary passion. They need telemetry data to debug production bugs quickly but are easily overwhelmed by technical instrumentation jargon.",
    goals: [
      "Quickly instrument a Node.js Express service with auto-instrumentation.",
      "Understand exactly what metrics are sent by default to control billable costs.",
      "Find code copy-paste snippets that actually compile and work out-of-the-box."
    ],
    painPoints: [
      "Documentation is scattered across multiple GitHub repositories and official docs sites.",
      "Spends hours debugging dependency mismatches between '@opentelemetry/api' and individual plugins.",
      "Semantic conventions change frequently, causing dashboard charts to silently break."
    ],
    tools: ["VS Code", "GitHub", "npm", "Google", "ChatGPT-4", "Datadog"],
    mentalModel: "Observability is a 'plug-and-play' black-box utility that should run transparently.",
    journeyStep: "Struggles during the initial setup and configuration verification phase.",
    observabilityLiteracy: 45
  },
  {
    id: "persona-sre",
    name: "Marcus Vance",
    role: "Lead SRE / Infrastructure Architect",
    avatar: "MV",
    experience: "12+ years in Systems & Cloud Native",
    quote: "Standardized instrumentation is great, but when a service goes down, I need to know precisely which attribute represents the database hostname and what version of the runtime is leaking memory.",
    description: "Marcus maintains cluster stability and uptime. He cares deeply about data standardisation, structured logging, semantic conventions, and OpenTelemetry Collector topology. He is frustrated by the lack of structured tables detailing the performance overhead of tracers.",
    goals: [
      "Establish global tracing and metric schemas across 40+ microservices.",
      "Write secure Collector configurations for scrubbing PII data before forwarding.",
      "Ensure all applications attach standard tags like 'service.namespace' and 'deployment.environment'."
    ],
    painPoints: [
      "No clear documentation on Collector memory usage thresholds under high load.",
      "Difficulty in auditing which auto-instrumentation modules violate security compliance policies.",
      "Inconsistent telemetry schemas across different programming language SDKs."
    ],
    tools: ["Kubernetes", "Terraform", "Prometheus", "Grafana", "OTel Collector", "Slack"],
    mentalModel: "Observability is a highly structured compliance layer and pipeline routing network.",
    journeyStep: "Frustrated when troubleshooting data ingestion failures and semantic mapping anomalies.",
    observabilityLiteracy: 90
  },
  {
    id: "persona-platform-eng",
    name: "Yuki Tanaka",
    role: "Developer Experience (DevEx) Engineer",
    avatar: "YT",
    experience: "6+ years in internal developer platform building",
    quote: "My customers are our internal developers. If our golden path templates are hard to configure, they won't instrument their code, and SRE will suffer. We need simple, progressive discovery.",
    description: "Yuki builds the internal platform templates that developers use to spin up new microservices. She aims to abstract away the complexity of OpenTelemetry by providing sensible defaults, but needs highly clear documentation to write those libraries.",
    goals: [
      "Provide 'one-click' observability setups in company-wide templates.",
      "Create lightweight wrapper libraries around OpenTelemetry SDKs.",
      "Reduce developer friction when discovering available telemetry attributes."
    ],
    painPoints: [
      "OpenTelemetry docs do not explain the 'why' behind architectural choices.",
      "Tension between SRE requirements (dense data) and App Dev complaints (complex API).",
      "Struggles to map old proprietary metrics systems to OpenTelemetry Semantic Conventions."
    ],
    tools: ["Backstage", "ArgoCD", "TypeScript", "Python", "Grafana", "Mermaid.js"],
    mentalModel: "Observability is a crucial component of internal golden paths and developer onboarding workflows.",
    journeyStep: "Designing standard templates and debugging custom telemetry processors.",
    observabilityLiteracy: 75
  },
  {
    id: "persona-app-coder",
    name: "Application Developer (Onboarding)",
    role: "Full-Stack Software Engineer",
    avatar: "AD",
    experience: "2+ years configuring microservices",
    quote: "I want to integrate tracing without having to read hundreds of pages of registry configurations. I just need a clean configuration script for my Spring Boot service.",
    description: "An engineer who needs to quickly instrument their service under guidance from the platform team. They suffer heavily when documentation schemas are fragmented and lack clear copy-paste Java agent setups.",
    goals: [
      "Integrate standard telemetry libraries safely.",
      "Configure Spring agent exporter endpoints.",
      "Verify traces are successfully exported to Jaeger."
    ],
    painPoints: [
      "Outdated configuration blogs and stackoverflow answers.",
      "Unclear environment variable setups for spring integrations.",
      "Fragmented registry pages without clear copy-paste bootstrap templates."
    ],
    tools: ["Spring Boot", "VS Code", "Docker", "GitHub Actions"],
    mentalModel: "Observability should be a zero-configuration experience with standard defaults.",
    journeyStep: "Copying standard template bootstrap configs and starting the service.",
    observabilityLiteracy: 50
  }
];

export const competitorAnalyses: CompetitorAnalysis[] = [
  {
    name: "npm Registry",
    logo: "NPM",
    type: "Package Registry",
    strengths: [
      "Clean metadata panel featuring downloads, bundle size, and open issues.",
      "Direct tabs leading to README, Dependencies, and Versions.",
      "Consistent copy-paste installation commands displayed on the main page."
    ],
    weaknesses: [
      "No technical schema or semantic validation support.",
      "README is raw, unformatted HTML with no standard telemetry tables.",
      "Difficult to filter packages based on architectural capability."
    ],
    progressiveDisclosureRating: 3,
    searchRelevanceRating: 4,
    versioningUxRating: 4,
    discoveryPattern: "High-level summary on landing -> full raw README -> version tables.",
    takeaway: "Always present a consistent, high-level metadata summary (downloads, active status, setup complexity) in a standardized sidebar."
  },
  {
    name: "Docker Hub",
    logo: "DKR",
    type: "Container Registry",
    strengths: [
      "Excellent visualization of tags and image layer structures.",
      "Direct code execution blocks visible inside setup instructions.",
      "Official / Verified badge system builds user confidence."
    ],
    weaknesses: [
      "README files are extremely long and lack standard sections.",
      "Search results return hundreds of low-quality community forks.",
      "Configuration parameters are buried under deep text paragraphs."
    ],
    progressiveDisclosureRating: 2,
    searchRelevanceRating: 3,
    versioningUxRating: 4,
    discoveryPattern: "Search query -> metadata list -> complex tab layout with huge markdown file.",
    takeaway: "Create standardized verification badges for instrumentation packages and separate configuration options into structured, searchable tables."
  },
  {
    name: "Stripe Docs",
    logo: "STR",
    type: "API Documentation",
    strengths: [
      "Gold-standard multi-language code switches that stay synchronized.",
      "Interactive code playground linked to real mock responses.",
      "Brilliant hierarchy with high-contrast text and interactive examples."
    ],
    weaknesses: [
      "Heavily custom-tailored for a closed platform, not an open-source ecosystem.",
      "Difficult to adapt directly to microservice configurations."
    ],
    progressiveDisclosureRating: 5,
    searchRelevanceRating: 5,
    versioningUxRating: 4,
    discoveryPattern: "Conceptual guide -> Side-by-side split screen (code on right, steps on left) -> interactive payload schema.",
    takeaway: "Implement a 'Split-Screen' layout showing Code Configuration on the left and resulting Telemetry Outputs (JSON spans/metrics) on the right."
  },
  {
    name: "crates.io / pkg.go.dev",
    logo: "CRT",
    type: "Language Specific Registries",
    strengths: [
      "Direct deep index of all functions, structs, and modules.",
      "Version history with absolute transparency in dependency graphs.",
      "Extremely dense, information-rich presentation suited for engineers."
    ],
    weaknesses: [
      "High visual clutter for beginners.",
      "Aesthetics are heavily basic and unstyled (almost raw HTML).",
      "No interactive setup guides."
    ],
    progressiveDisclosureRating: 2,
    searchRelevanceRating: 4,
    versioningUxRating: 5,
    discoveryPattern: "Fuzzy search -> direct index list -> deeply hierarchical code types tree.",
    takeaway: "Embrace the dense information architecture but beautify it with modern UI styling (soft borders, dark theme, and interactive filters)."
  },
  {
    name: "Grafana Integration Docs",
    logo: "GRF",
    type: "Observability Tooling",
    strengths: [
      "Displays pre-built dashboards that users get instantly.",
      "Clear lists of metrics gathered by the integration.",
      "Actionable copy-paste agent config commands."
    ],
    weaknesses: [
      "Directly ties users to proprietary agents.",
      "Configuration is separated from telemetry schemas."
    ],
    progressiveDisclosureRating: 4,
    searchRelevanceRating: 3,
    versioningUxRating: 3,
    discoveryPattern: "Interactive dashboard mockups -> table of metrics -> CLI setup guides.",
    takeaway: "Observability developers are highly visual. Providing a preview of what dashboards or spans look like is critical to driving adoption."
  }
];

export const instrumentationPackages: InstrumentationPackage[] = [
  {
    id: "java-auto",
    name: "opentelemetry-javaagent",
    language: "Java",
    category: "backend",
    stability: "stable",
    version: "2.3.0",
    downloads: "2.1M/mo",
    stars: 3450,
    description: "All-in-one Java agent auto-instrumentation. Automatically injects bytecode into frameworks like Spring Boot, Tomcat, and gRPC to collect distributed traces and metrics without code changes.",
    setupComplexity: "low",
    signals: [
      {
        name: "http.server.request.duration",
        type: "metric",
        description: "Measures the duration of inbound HTTP requests.",
        dataType: "Histogram",
        unit: "ms",
        attributes: [
          { name: "http.request.method", type: "string", description: "HTTP request method (GET, POST).", required: true, example: "GET" },
          { name: "http.response.status_code", type: "integer", description: "HTTP response status code.", required: true, example: "200" },
          { name: "url.scheme", type: "string", description: "URI scheme (http, https).", required: false, example: "https" },
          { name: "server.address", type: "string", description: "Host identifier.", required: true, example: "api.production.internal" }
        ]
      },
      {
        name: "db.client.operation.duration",
        type: "metric",
        description: "Duration of database operations.",
        dataType: "Histogram",
        unit: "ms",
        attributes: [
          { name: "db.system", type: "string", description: "Database management system (postgresql, mysql).", required: true, example: "postgresql" },
          { name: "db.name", type: "string", description: "Database schema name.", required: true, example: "users_db" },
          { name: "db.query.text", type: "string", description: "Sanitized SQL query.", required: false, example: "SELECT * FROM users WHERE id = ?" }
        ]
      },
      {
        name: "HTTP Server Transaction",
        type: "span",
        description: "Represents an active server request handler processing thread.",
        attributes: [
          { name: "span.kind", type: "string", description: "Always set to SERVER.", required: true, example: "SERVER" },
          { name: "thread.name", type: "string", description: "Name of the executing Java thread.", required: false, example: "http-nio-8080-exec-1" },
          { name: "error.type", type: "string", description: "Underlying Java Exception class if failed.", required: false, example: "java.lang.NullPointerException" }
        ]
      }
    ],
    configurations: [
      {
        name: "otel.service.name",
        type: "String",
        defaultValue: "unnamed-service",
        description: "The name of the service running, which will group traces on your dashboards.",
        environmentVariable: "OTEL_SERVICE_NAME",
        importance: "critical"
      },
      {
        name: "otel.exporter.otlp.endpoint",
        type: "URL",
        defaultValue: "http://localhost:4317",
        description: "The endpoint of the OpenTelemetry Collector to forward signals.",
        environmentVariable: "OTEL_EXPORTER_OTLP_ENDPOINT",
        importance: "critical"
      },
      {
        name: "otel.instrumentation.jdbc.enabled",
        type: "Boolean",
        defaultValue: "true",
        description: "Disables SQL auto-instrumentation when set to false.",
        environmentVariable: "OTEL_INSTRUMENTATION_JDBC_ENABLED",
        importance: "optional"
      },
      {
        name: "otel.traces.sampler",
        type: "String",
        defaultValue: "parentbased_always_on",
        description: "Sampler settings (e.g. ratio-based sampling ratios).",
        environmentVariable: "OTEL_TRACES_SAMPLER",
        importance: "optional"
      }
    ],
    supportedVersions: [
      { runtime: "Java 8, 11, 17, 21+", library: "Spring Boot 2.x and 3.x" },
      { runtime: "Java 11+", library: "Quarkus 2.x & 3.x" },
      { runtime: "Java 8+", library: "Apache Tomcat 8.5+" }
    ],
    dependencies: [
      "opentelemetry-api:1.32.0",
      "opentelemetry-sdk:1.32.0"
    ],
    coverageScore: 96
  },
  {
    id: "js-node",
    name: "@opentelemetry/sdk-node",
    language: "JavaScript",
    category: "backend",
    stability: "stable",
    version: "0.48.0",
    downloads: "1.4M/mo",
    stars: 1890,
    description: "OpenTelemetry Node.js SDK builder. Ideal for setting up tracing, metrics, and logs inside Node.js applications, supporting express, fastify, pg, and winston core plugins.",
    setupComplexity: "medium",
    signals: [
      {
        name: "http.client.duration",
        type: "metric",
        description: "Measures request latency for outgoing fetch/http calls.",
        dataType: "Histogram",
        unit: "ms",
        attributes: [
          { name: "http.request.method", type: "string", description: "HTTP method.", required: true, example: "POST" },
          { name: "url.full", type: "string", description: "Full URL target.", required: true, example: "https://api.stripe.com/v1/charges" },
          { name: "server.port", type: "integer", description: "Port of server destination.", required: false, example: "443" }
        ]
      },
      {
        name: "HTTP Outgoing Fetch",
        type: "span",
        description: "Represents an outgoing HTTP query triggered via fetch or axios.",
        attributes: [
          { name: "span.kind", type: "string", description: "Always set to CLIENT.", required: true, example: "CLIENT" },
          { name: "http.response.status_code", type: "integer", description: "HTTP status code.", required: true, example: "201" }
        ]
      }
    ],
    configurations: [
      {
        name: "OTEL_SERVICE_NAME",
        type: "string",
        defaultValue: "node-service",
        description: "Name of the node microservice.",
        environmentVariable: "OTEL_SERVICE_NAME",
        importance: "critical"
      },
      {
        name: "OTEL_TRACES_EXPORTER",
        type: "string",
        defaultValue: "otlp",
        description: "Exporter module to load (otlp, zipkin, console).",
        environmentVariable: "OTEL_TRACES_EXPORTER",
        importance: "critical"
      },
      {
        name: "OTEL_NODE_RESOURCE_DETECTORS",
        type: "string",
        defaultValue: "env,host,os",
        description: "Resource detectors initialized at startup.",
        environmentVariable: "OTEL_NODE_RESOURCE_DETECTORS",
        importance: "optional"
      }
    ],
    supportedVersions: [
      { runtime: "Node.js >= 16.x", library: "Express 4.x" },
      { runtime: "Node.js >= 18.x", library: "Fastify 4.x" },
      { runtime: "Node.js >= 14.x", library: "Koa 2.x" }
    ],
    dependencies: [
      "@opentelemetry/api:1.7.0",
      "@opentelemetry/resources:1.19.0"
    ],
    coverageScore: 82
  },
  {
    id: "python-auto",
    name: "opentelemetry-distro",
    language: "Python",
    category: "backend",
    stability: "stable",
    version: "0.44b0",
    downloads: "950K/mo",
    stars: 1250,
    description: "Python auto-instrumentation bootstrap packaging. Installs a wrapper runner (`opentelemetry-instrument`) that automatically detects and injects tracers into Django, Flask, FastAPI, and SQLAlchemy.",
    setupComplexity: "low",
    signals: [
      {
        name: "http.server.duration",
        type: "metric",
        description: "Measures standard HTTP server latency.",
        dataType: "Histogram",
        unit: "s",
        attributes: [
          { name: "http.request.method", type: "string", description: "HTTP method.", required: true, example: "GET" },
          { name: "http.response.status_code", type: "integer", description: "HTTP status code.", required: true, example: "200" }
        ]
      },
      {
        name: "WSGI Request Lifecycle",
        type: "span",
        description: "Span covering the routing framework execution overhead.",
        attributes: [
          { name: "span.kind", type: "string", description: "Always set to SERVER.", required: true, example: "SERVER" },
          { name: "exception.message", type: "string", description: "Error trace output message.", required: false, example: "Database disconnect." }
        ]
      }
    ],
    configurations: [
      {
        name: "OTEL_PYTHON_DISABLED_INSTRUMENTATIONS",
        type: "string",
        defaultValue: "",
        description: "Comma-separated list of integrations to bypass.",
        environmentVariable: "OTEL_PYTHON_DISABLED_INSTRUMENTATIONS",
        importance: "optional"
      },
      {
        name: "OTEL_LOGS_EXPORTER",
        type: "string",
        defaultValue: "none",
        description: "Destination for python logs. (otlp or none).",
        environmentVariable: "OTEL_LOGS_EXPORTER",
        importance: "critical"
      }
    ],
    supportedVersions: [
      { runtime: "Python 3.8 - 3.12", library: "Django 3.2 - 5.0" },
      { runtime: "Python 3.8+", library: "Flask 2.x - 3.x" },
      { runtime: "Python 3.9+", library: "FastAPI 0.90+" }
    ],
    dependencies: [
      "opentelemetry-api:1.23.0",
      "opentelemetry-sdk:1.23.0"
    ],
    coverageScore: 88
  },
  {
    id: "collector-core",
    name: "otelcol-contrib",
    language: "Go / YAML",
    category: "infrastructure",
    stability: "stable",
    version: "0.95.0",
    downloads: "5.4M/mo",
    stars: 5200,
    description: "OpenTelemetry Collector Contrib distribution. Runs as a local daemon proxy to receive pipelines, batch, scrub, filter, and export telemetry to multiple backends (Jaeger, Prometheus, Datadog).",
    setupComplexity: "high",
    signals: [
      {
        name: "otelcol_receiver_accepted_spans",
        type: "metric",
        description: "Number of span items accepted by the receiver endpoints.",
        dataType: "Sum",
        unit: "spans",
        attributes: [
          { name: "receiver", type: "string", description: "Receiver identifier.", required: true, example: "otlp" },
          { name: "transport", type: "string", description: "Transport layer (grpc, http).", required: true, example: "grpc" }
        ]
      },
      {
        name: "otelcol_processor_dropped_spans",
        type: "metric",
        description: "Spans rejected due to memory limiting or queue limits.",
        dataType: "Sum",
        unit: "spans",
        attributes: [
          { name: "processor", type: "string", description: "Processor identifier.", required: true, example: "memory_limiter" }
        ]
      }
    ],
    configurations: [
      {
        name: "receivers",
        type: "YAML",
        defaultValue: "otlp: { protocols: { grpc: {} } }",
        description: "Pipelines ingestion definitions.",
        environmentVariable: "None (YAML config)",
        importance: "critical"
      },
      {
        name: "processors",
        type: "YAML",
        defaultValue: "batch: {}, memory_limiter: {}",
        description: "Processors to structure data batching, rate-limiting, and scrubbing.",
        environmentVariable: "None (YAML config)",
        importance: "critical"
      },
      {
        name: "exporters",
        type: "YAML",
        defaultValue: "otlp/elastic: { endpoint: ... }",
        description: "Destinations for telemetry outputs.",
        environmentVariable: "None (YAML config)",
        importance: "critical"
      }
    ],
    supportedVersions: [
      { runtime: "Kubernetes 1.22+", library: "Helm Chart 0.70+" },
      { runtime: "Linux Systemd", library: "Daemon AMD64" }
    ],
    dependencies: [
      "go.opentelemetry.io/collector:0.95.0"
    ],
    coverageScore: 98
  },
  {
    id: "kafka-instrumentation",
    name: "opentelemetry-instrumentation-kafka",
    language: "Java / JS / Python",
    category: "messaging",
    stability: "stable",
    version: "1.8.0",
    downloads: "95K/mo",
    stars: 840,
    description: "Kafka Client OpenTelemetry Instrumentation. Automatically tracks consumer delays, consumer group lags, offset processing times, and publisher latency metrics in Apache Kafka messaging systems.",
    setupComplexity: "low",
    signals: [
      {
        name: "messaging.kafka.consumer.lag",
        type: "metric",
        description: "Offsets delay between consumer group reading positions and partition endpoints.",
        dataType: "Sum",
        unit: "messages",
        attributes: [
          { name: "messaging.destination.name", type: "string", description: "Target Kafka topic name.", required: true, example: "orders-topic" },
          { name: "messaging.kafka.consumer.group", type: "string", description: "Consumer group identifier.", required: true, example: "orders-processor" }
        ]
      },
      {
        name: "messaging.publish",
        type: "span",
        description: "A publisher span capturing serialization delay and produce runtime metrics.",
        attributes: [
          { name: "messaging.system", type: "string", description: "Messaging system provider.", required: true, example: "kafka" },
          { name: "messaging.kafka.partition", type: "int", description: "Target offset partition.", required: false, example: "4" }
        ]
      }
    ],
    configurations: [
      {
        name: "OTEL_INSTRUMENTATION_KAFKA_METRIC_REPORTER_ENABLED",
        type: "boolean",
        defaultValue: "true",
        description: "Toggles whether to export offset lag metrics to OTLP collector endpoint.",
        environmentVariable: "OTEL_INSTRUMENTATION_KAFKA_METRIC_REPORTER_ENABLED",
        importance: "critical"
      }
    ],
    supportedVersions: [
      { runtime: "Java >= 11", library: "kafka-clients >= 2.0.0" },
      { runtime: "Python >= 3.8", library: "confluent-kafka >= 1.7.0" }
    ],
    dependencies: [
      "opentelemetry-semantic-conventions:1.0.0"
    ],
    coverageScore: 92
  }
];

export interface AiScenarios {
  prompt: string;
  assistantSummary: string;
  confidenceScore: number;
  tokensUsed: number;
  sources: { title: string; url: string; confidence: number }[];
  groundingAttributes: { attribute: string; definition: string; isStandard: boolean }[];
  generatedCode: string;
}

export const aiScenarios: AiScenarios[] = [
  {
    prompt: "How do I trace my HTTP server and configure custom span attributes?",
    assistantSummary: "To trace HTTP server requests and capture custom headers, you should deploy the `@opentelemetry/instrumentation-http` package. This instruments Node.js http/https controllers to generate standard HTTP spans such as `http.server.request.duration`, mapping standard attributes like `http.request.method` and `url.path` directly into the tracing collector context.",
    confidenceScore: 98,
    tokensUsed: 220,
    sources: [
      { title: "OTel Semantic Conventions: HTTP Server Rules (v1.25.0)", url: "https://opentelemetry.io/docs/specs/semconv/http/http-spans/", confidence: 99 },
      { title: "@opentelemetry/instrumentation-http npm registry", url: "https://www.npmjs.com/package/@opentelemetry/instrumentation-http", confidence: 94 }
    ],
    groundingAttributes: [
      { attribute: "http.request.method", definition: "Standard HTTP action method.", isStandard: true },
      { attribute: "url.path", definition: "Clean URL path requested by the incoming client.", isStandard: true }
    ],
    generatedCode: `const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation({
      requestHook: (span, request) => {
        span.setAttribute("custom.request.header", request.headers['x-custom-request-id']);
      },
    }),
  ],
});`
  },
  {
    prompt: "How can I configure my Spring Boot app to exclude standard SQL tracing logs, but keep HTTP server latency charts?",
    assistantSummary: "For the OpenTelemetry Java Agent, you can selectively toggle individual auto-instrumentation modules via environment variables. Setting `OTEL_INSTRUMENTATION_JDBC_ENABLED=false` disables the internal JDBC driver interceptors while leaving HTTP tracing controllers active (`otel.instrumentation.spring-webmvc.enabled` defaults to true). This keeps `http.server.request.duration` running but silences database trace spans.",
    confidenceScore: 98,
    tokensUsed: 310,
    sources: [
      { title: "OTel JavaAgent Configuration Guidelines", url: "https://opentelemetry.io/docs/zero-code/java/agent/configuration/", confidence: 100 },
      { title: "JDBC Bytecode Agent Interceptor Specs", url: "https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/jdbc", confidence: 95 }
    ],
    groundingAttributes: [
      { attribute: "otel.instrumentation.jdbc.enabled", definition: "Environment flag to disable SQL interception.", isStandard: true },
      { attribute: "http.server.request.duration", definition: "Incoming HTTP duration measurements.", isStandard: true }
    ],
    generatedCode: `# Run your Spring Boot application with standard agent path and disabled JDBC
export OTEL_SERVICE_NAME="orders-service"
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otel-collector.internal:4317"
export OTEL_INSTRUMENTATION_JDBC_ENABLED=false

java -javaagent:path/to/opentelemetry-javaagent.jar -jar target/orders-app.jar`
  },
  {
    prompt: "I am getting warning: '@opentelemetry/api' version mismatch in Node.js. How do I fix this?",
    assistantSummary: "In OpenTelemetry JavaScript, the core `@opentelemetry/api` is treated as a singleton. If individual instrumentations or SDK packages are installed with mismatched versions, npm duplicates the node_modules API. This creates multiple active registries inside the thread context, throwing initialization warnings and dropping traces. Fix this by enforcing a resolution path or using uniform versions in package.json.",
    confidenceScore: 92,
    tokensUsed: 480,
    sources: [
      { title: "OTel JS Troubleshooting: Version Mismatch Singletons", url: "https://opentelemetry.io/docs/languages/js/troubleshooting/#singleton-api-errors", confidence: 97 },
      { title: "GitHub Issue #3412: Cannot read properties of undefined (tracing registry)", url: "https://github.com/open-telemetry/opentelemetry-js/issues/3412", confidence: 89 }
    ],
    groundingAttributes: [
      { attribute: "@opentelemetry/api", definition: "Must be exactly synchronized across plugins (e.g. ^1.7.0).", isStandard: true }
    ],
    generatedCode: `// package.json resolution override (For npm v8+ or Yarn)
{
  "dependencies": {
    "@opentelemetry/api": "^1.7.0",
    "@opentelemetry/sdk-node": "^0.48.0",
    "@opentelemetry/instrumentation-express": "^0.35.0"
  },
  "overrides": {
    "@opentelemetry/api": "$@opentelemetry/api"
  }
}`
  }
];

export const searchIndex = [
  { term: "Javaagent", category: "IA Recommendations", link: "ia-section" },
  { term: "Express node instrumentation", category: "IA Recommendations", link: "ia-section" },
  { term: "Semantic Conventions", category: "Information Architecture", link: "ia-section" },
  { term: "Alex Rivera", category: "Personas", link: "research-section" },
  { term: "Marcus Vance", category: "Personas", link: "research-section" },
  { term: "Yuki Tanaka", category: "Personas", link: "research-section" },
  { term: "Kafka offset lag metrics", category: "IA Recommendations", link: "ia-section" },
  { term: "Stripe Docs Comparison", category: "Competitive Analysis", link: "competitive-section" },
  { term: "Low Fidelity Wireframe", category: "Interactive Wireframes", link: "mockups-section" },
  { term: "High Fidelity UI", category: "Interactive Wireframes", link: "mockups-section" },
  { term: "OTLP Endpoint Config", category: "IA Recommendations", link: "ia-section" }
];
