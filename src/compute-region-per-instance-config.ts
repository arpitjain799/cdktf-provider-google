// https://www.terraform.io/docs/providers/google/r/compute_region_per_instance_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRegionPerInstanceConfigConfig extends TerraformMetaArguments {
  readonly minimalAction?: string;
  readonly mostDisruptiveAllowedAction?: string;
  /** The name for this per-instance config and its corresponding instance. */
  readonly name: string;
  readonly project?: string;
  /** Region where the containing instance group manager is located */
  readonly region: string;
  /** The region instance group manager this instance config is part of. */
  readonly regionInstanceGroupManager: string;
  readonly removeInstanceStateOnDestroy?: boolean;
  /** preserved_state block */
  readonly preservedState?: ComputeRegionPerInstanceConfigPreservedState[];
  /** timeouts block */
  readonly timeouts?: ComputeRegionPerInstanceConfigTimeouts;
}
export interface ComputeRegionPerInstanceConfigPreservedStateDisk {
  /** A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"] */
  readonly deleteRule?: string;
  /** A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. */
  readonly deviceName: string;
  /** The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"] */
  readonly mode?: string;
  /** The URI of an existing persistent disk to attach under the specified device-name in the format
'projects/project-id/zones/zone/disks/disk-name'. */
  readonly source: string;
}
export interface ComputeRegionPerInstanceConfigPreservedState {
  /** Preserved metadata defined for this instance. This is a list of key->value pairs. */
  readonly metadata?: { [key: string]: string };
  /** disk block */
  readonly disk?: ComputeRegionPerInstanceConfigPreservedStateDisk[];
}
export interface ComputeRegionPerInstanceConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeRegionPerInstanceConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionPerInstanceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_per_instance_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._minimalAction = config.minimalAction;
    this._mostDisruptiveAllowedAction = config.mostDisruptiveAllowedAction;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._regionInstanceGroupManager = config.regionInstanceGroupManager;
    this._removeInstanceStateOnDestroy = config.removeInstanceStateOnDestroy;
    this._preservedState = config.preservedState;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimal_action - computed: false, optional: true, required: false
  private _minimalAction?: string;
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string ) {
    this._minimalAction = value;
  }
  public resetMinimalAction() {
    this._minimalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string;
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }
  public set mostDisruptiveAllowedAction(value: string ) {
    this._mostDisruptiveAllowedAction = value;
  }
  public resetMostDisruptiveAllowedAction() {
    this._mostDisruptiveAllowedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostDisruptiveAllowedActionInput() {
    return this._mostDisruptiveAllowedAction
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

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // region_instance_group_manager - computed: false, optional: false, required: true
  private _regionInstanceGroupManager: string;
  public get regionInstanceGroupManager() {
    return this.getStringAttribute('region_instance_group_manager');
  }
  public set regionInstanceGroupManager(value: string) {
    this._regionInstanceGroupManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInstanceGroupManagerInput() {
    return this._regionInstanceGroupManager
  }

  // remove_instance_state_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceStateOnDestroy?: boolean;
  public get removeInstanceStateOnDestroy() {
    return this.getBooleanAttribute('remove_instance_state_on_destroy');
  }
  public set removeInstanceStateOnDestroy(value: boolean ) {
    this._removeInstanceStateOnDestroy = value;
  }
  public resetRemoveInstanceStateOnDestroy() {
    this._removeInstanceStateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceStateOnDestroyInput() {
    return this._removeInstanceStateOnDestroy
  }

  // preserved_state - computed: false, optional: true, required: false
  private _preservedState?: ComputeRegionPerInstanceConfigPreservedState[];
  public get preservedState() {
    return this.interpolationForAttribute('preserved_state') as any;
  }
  public set preservedState(value: ComputeRegionPerInstanceConfigPreservedState[] ) {
    this._preservedState = value;
  }
  public resetPreservedState() {
    this._preservedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservedStateInput() {
    return this._preservedState
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionPerInstanceConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRegionPerInstanceConfigTimeouts ) {
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
      minimal_action: this._minimalAction,
      most_disruptive_allowed_action: this._mostDisruptiveAllowedAction,
      name: this._name,
      project: this._project,
      region: this._region,
      region_instance_group_manager: this._regionInstanceGroupManager,
      remove_instance_state_on_destroy: this._removeInstanceStateOnDestroy,
      preserved_state: this._preservedState,
      timeouts: this._timeouts,
    };
  }
}
