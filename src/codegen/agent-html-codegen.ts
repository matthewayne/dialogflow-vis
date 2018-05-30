import { Graph } from "../graph/graph";
import fs = require("fs");
import { GraphCodegenVisitor } from "./graph-codegen-visitor";
import { GraphHtmlCodegenVisitor } from "./graph-html-codegen-visitor";
import { GraphHtmlCodegen } from "./graph-html-codegen";
import { AgentCodegen } from "./agent-codegen";
import { GraphCodegen } from "./graph-codegen";

export class AgentHtmlCodegen extends AgentCodegen {
  private readonly PATH_TO_TEMPLATE: string = './agent-template.html';

  constructor(graph: Graph) {
    super(graph);
  }
  codegen(): string {
    return super.codegen();
  }

  createGraphCodegen(): GraphCodegen {
    return new GraphHtmlCodegen(this._graph);
  }

  createSrcTemplate(): string {
    return fs.readFileSync(this.PATH_TO_TEMPLATE, 'utf-8');
  }
}