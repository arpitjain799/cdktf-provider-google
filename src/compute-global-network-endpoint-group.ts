// https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeGlobalNetworkEndpointGroupConfig extends TerraformMetaArguments {
  /** The default port used if the port number is not specified in the
network endpoint. */
  readonly defaultPort?: number;
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"] */
  readonly networkEndpointType: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ComputeGlobalNetworkEndpointGroupTimeouts;
}
export interface ComputeGlobalNetworkEndpointGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeGlobalNetworkEndpointGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeGlobalNetworkEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_network_endpoint_group',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultPort = config.defaultPort;
    this._description = config.description;
    this._name = config.name;
    this._networkEndpointType = config.networkEndpointType;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_port - computed: false, optional: true, required: false
  private _defaultPort?: number;
  public get defaultPort() {
    return this.getNumberAttribute('default_port');
  }
  public set defaultPort(value: number ) {
    this._defaultPort = value;
  }
  public resetDefaultPort() {
    this._defaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortInput() {
    return this._defaultPort
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // network_endpoint_type - computed: false, optional: false, required: true
  private _networkEndpointType: string;
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }
  public set networkEndpointType(value: string) {
    this._networkEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointTypeInput() {
    return this._networkEndpointType
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeGlobalNetworkEndpointGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeGlobalNetworkEndpointGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_port: this._defaultPort,
      description: this._description,
      name: this._name,
      network_endpoint_type: this._networkEndpointType,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
