# MCP (Model Context Protocol) Tools List

## Core MCP Framework
- **mcp** (Python) - Version 1.16.0 - Core MCP development tools with CLI support
  - Commands: `mcp dev`, `mcp run`, `mcp install`, `mcp version`

## Popular MCP Servers & Tools

### Web & Browser Tools
- **@playwright/mcp** (npm) - Playwright Tools for MCP (v0.0.42)
- **chrome-devtools-mcp** (npm) - MCP server for Chrome DevTools (v0.6.1)
- **tavily-mcp** (npm) - Advanced web search using Tavily (v0.2.10)

### Database & Storage
- **@notionhq/notion-mcp-server** (npm) - Official MCP server for Notion API (v1.9.0)
- **@supabase/mcp-utils** (npm) - MCP utilities for Supabase (v0.2.2)

### Development & Workflow
- **n8n-nodes-mcp** (npm) - MCP nodes for n8n workflow automation (v0.1.29)
- **n8n-mcp** (npm) - Integration between n8n and MCP (v2.18.4)
- **@composio/mcp** (npm) - MCP CLI tool (v1.0.9)

### AI & LLM Integration
- **gemini-mcp-tool** (npm) - MCP server for Gemini CLI integration (v1.1.4)
- **@langchain/mcp-adapters** (npm) - LangChain.js adapters for MCP (v0.6.0)
- **@mastra/mcp** (npm) - MCP client implementation for Mastra (v0.13.4)

### Framework & Infrastructure
- **mcp-framework** (npm) - Framework for building MCP servers in TypeScript (v0.2.15)
- **mcp-http-server** (npm) - High performance HTTP Server for MCP (v1.2.4)
- **mcp-proxy** (npm) - TypeScript SSE proxy for MCP servers (v5.8.1)
- **@hono/mcp** (npm) - MCP Middleware for Hono (v0.1.4)

### Platform Integrations
- **@vercel/mcp-adapter** (npm) - Vercel MCP Adapter for Next.js (v1.0.0)
- **mcp-handler** (npm) - Vercel MCP Adapter for Next.js (v1.0.2)
- **@expo/mcp-tunnel** (npm) - Expo MCP tunnel client (v0.0.8)

### Development Context
- **@upstash/context7-mcp** (npm) - MCP server for Context7 (v1.0.21)

### Example & Learning
- **mcp-hello-world** (npm) - Simple Hello World MCP server (v1.1.2)

## Installation & Usage

### Install Core MCP CLI
```bash
pip install 'mcp[cli]'
```

### Install Node.js MCP Tools
```bash
npm install -g @playwright/mcp
npm install -g @notionhq/notion-mcp-server
npm install -g tavily-mcp
# ... etc
```

### Basic MCP Commands
```bash
# Show MCP version
mcp version

# Run MCP server with inspector
mcp dev <server_file>

# Run MCP server
mcp run <server_file>

# Install MCP server in Claude desktop app
mcp install <file_spec>
```

## Notes
- MCP (Model Context Protocol) enables AI models to interact with external tools and data sources
- Most tools are available via npm (Node.js ecosystem)
- The core MCP framework is available in Python
- Many tools integrate with popular platforms like Notion, Supabase, Vercel, etc.
- Tools range from simple examples to production-ready servers for various use cases