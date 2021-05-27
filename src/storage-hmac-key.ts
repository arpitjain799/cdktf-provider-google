// https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageHmacKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html#project StorageHmacKey#project}
  */
  readonly project?: string;
  /**
  * The email address of the key's associated service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html#service_account_email StorageHmacKey#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * The state of the key. Can be set to one of ACTIVE, INACTIVE. Default value: "ACTIVE" Possible values: ["ACTIVE", "INACTIVE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html#state StorageHmacKey#state}
  */
  readonly state?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html#timeouts StorageHmacKey#timeouts}
  */
  readonly timeouts?: StorageHmacKeyTimeouts;
}
export interface StorageHmacKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html#create StorageHmacKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html#delete StorageHmacKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html#update StorageHmacKey#update}
  */
  readonly update?: string;
}

function storageHmacKeyTimeoutsToTerraform(struct?: StorageHmacKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html google_storage_hmac_key}
*/
export class StorageHmacKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/storage_hmac_key.html google_storage_hmac_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageHmacKeyConfig
  */
  public constructor(scope: Construct, id: string, config: StorageHmacKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_hmac_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._state = config.state;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail: string;
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageHmacKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageHmacKeyTimeouts ) {
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
      project: cdktf.stringToTerraform(this._project),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      state: cdktf.stringToTerraform(this._state),
      timeouts: storageHmacKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
