// https://www.terraform.io/docs/providers/google/r/compute_network_peering.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNetworkPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to export the custom routes to the peer network. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#export_custom_routes ComputeNetworkPeering#export_custom_routes}
  */
  readonly exportCustomRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#export_subnet_routes_with_public_ip ComputeNetworkPeering#export_subnet_routes_with_public_ip}
  */
  readonly exportSubnetRoutesWithPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Whether to export the custom routes from the peer network. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#import_custom_routes ComputeNetworkPeering#import_custom_routes}
  */
  readonly importCustomRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#import_subnet_routes_with_public_ip ComputeNetworkPeering#import_subnet_routes_with_public_ip}
  */
  readonly importSubnetRoutesWithPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Name of the peering.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#name ComputeNetworkPeering#name}
  */
  readonly name: string;
  /**
  * The primary network of the peering.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#network ComputeNetworkPeering#network}
  */
  readonly network: string;
  /**
  * The peer network in the peering. The peer network may belong to a different project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#peer_network ComputeNetworkPeering#peer_network}
  */
  readonly peerNetwork: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#timeouts ComputeNetworkPeering#timeouts}
  */
  readonly timeouts?: ComputeNetworkPeeringTimeouts;
}
export interface ComputeNetworkPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#create ComputeNetworkPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#delete ComputeNetworkPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html#update ComputeNetworkPeering#update}
  */
  readonly update?: string;
}

function computeNetworkPeeringTimeoutsToTerraform(struct?: ComputeNetworkPeeringTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html google_compute_network_peering}
*/
export class ComputeNetworkPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_network_peering";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_network_peering.html google_compute_network_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNetworkPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeNetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._exportCustomRoutes = config.exportCustomRoutes;
    this._exportSubnetRoutesWithPublicIp = config.exportSubnetRoutesWithPublicIp;
    this._importCustomRoutes = config.importCustomRoutes;
    this._importSubnetRoutesWithPublicIp = config.importSubnetRoutesWithPublicIp;
    this._name = config.name;
    this._network = config.network;
    this._peerNetwork = config.peerNetwork;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_custom_routes - computed: false, optional: true, required: false
  private _exportCustomRoutes?: boolean | cdktf.IResolvable;
  public get exportCustomRoutes() {
    return this.getBooleanAttribute('export_custom_routes');
  }
  public set exportCustomRoutes(value: boolean | cdktf.IResolvable ) {
    this._exportCustomRoutes = value;
  }
  public resetExportCustomRoutes() {
    this._exportCustomRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportCustomRoutesInput() {
    return this._exportCustomRoutes
  }

  // export_subnet_routes_with_public_ip - computed: false, optional: true, required: false
  private _exportSubnetRoutesWithPublicIp?: boolean | cdktf.IResolvable;
  public get exportSubnetRoutesWithPublicIp() {
    return this.getBooleanAttribute('export_subnet_routes_with_public_ip');
  }
  public set exportSubnetRoutesWithPublicIp(value: boolean | cdktf.IResolvable ) {
    this._exportSubnetRoutesWithPublicIp = value;
  }
  public resetExportSubnetRoutesWithPublicIp() {
    this._exportSubnetRoutesWithPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportSubnetRoutesWithPublicIpInput() {
    return this._exportSubnetRoutesWithPublicIp
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_custom_routes - computed: false, optional: true, required: false
  private _importCustomRoutes?: boolean | cdktf.IResolvable;
  public get importCustomRoutes() {
    return this.getBooleanAttribute('import_custom_routes');
  }
  public set importCustomRoutes(value: boolean | cdktf.IResolvable ) {
    this._importCustomRoutes = value;
  }
  public resetImportCustomRoutes() {
    this._importCustomRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importCustomRoutesInput() {
    return this._importCustomRoutes
  }

  // import_subnet_routes_with_public_ip - computed: false, optional: true, required: false
  private _importSubnetRoutesWithPublicIp?: boolean | cdktf.IResolvable;
  public get importSubnetRoutesWithPublicIp() {
    return this.getBooleanAttribute('import_subnet_routes_with_public_ip');
  }
  public set importSubnetRoutesWithPublicIp(value: boolean | cdktf.IResolvable ) {
    this._importSubnetRoutesWithPublicIp = value;
  }
  public resetImportSubnetRoutesWithPublicIp() {
    this._importSubnetRoutesWithPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importSubnetRoutesWithPublicIpInput() {
    return this._importSubnetRoutesWithPublicIp
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

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // peer_network - computed: false, optional: false, required: true
  private _peerNetwork: string;
  public get peerNetwork() {
    return this.getStringAttribute('peer_network');
  }
  public set peerNetwork(value: string) {
    this._peerNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkInput() {
    return this._peerNetwork
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNetworkPeeringTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeNetworkPeeringTimeouts ) {
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
      export_custom_routes: cdktf.booleanToTerraform(this._exportCustomRoutes),
      export_subnet_routes_with_public_ip: cdktf.booleanToTerraform(this._exportSubnetRoutesWithPublicIp),
      import_custom_routes: cdktf.booleanToTerraform(this._importCustomRoutes),
      import_subnet_routes_with_public_ip: cdktf.booleanToTerraform(this._importSubnetRoutesWithPublicIp),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      peer_network: cdktf.stringToTerraform(this._peerNetwork),
      timeouts: computeNetworkPeeringTimeoutsToTerraform(this._timeouts),
    };
  }
}
