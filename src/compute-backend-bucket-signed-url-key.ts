// https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeBackendBucketSignedUrlKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The backend bucket this signed URL key belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}
  */
  readonly backendBucket: string;
  /**
  * 128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html#key_value ComputeBackendBucketSignedUrlKey#key_value}
  */
  readonly keyValue: string;
  /**
  * Name of the signed URL key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html#name ComputeBackendBucketSignedUrlKey#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html#project ComputeBackendBucketSignedUrlKey#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html#timeouts ComputeBackendBucketSignedUrlKey#timeouts}
  */
  readonly timeouts?: ComputeBackendBucketSignedUrlKeyTimeouts;
}
export interface ComputeBackendBucketSignedUrlKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html#create ComputeBackendBucketSignedUrlKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html#delete ComputeBackendBucketSignedUrlKey#delete}
  */
  readonly delete?: string;
}

function computeBackendBucketSignedUrlKeyTimeoutsToTerraform(struct?: ComputeBackendBucketSignedUrlKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html google_compute_backend_bucket_signed_url_key}
*/
export class ComputeBackendBucketSignedUrlKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_backend_bucket_signed_url_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html google_compute_backend_bucket_signed_url_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeBackendBucketSignedUrlKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeBackendBucketSignedUrlKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_bucket_signed_url_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendBucket = config.backendBucket;
    this._keyValue = config.keyValue;
    this._name = config.name;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_bucket - computed: false, optional: false, required: true
  private _backendBucket: string;
  public get backendBucket() {
    return this.getStringAttribute('backend_bucket');
  }
  public set backendBucket(value: string) {
    this._backendBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendBucketInput() {
    return this._backendBucket
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_value - computed: false, optional: false, required: true
  private _keyValue: string;
  public get keyValue() {
    return this.getStringAttribute('key_value');
  }
  public set keyValue(value: string) {
    this._keyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeBackendBucketSignedUrlKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeBackendBucketSignedUrlKeyTimeouts ) {
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
      backend_bucket: cdktf.stringToTerraform(this._backendBucket),
      key_value: cdktf.stringToTerraform(this._keyValue),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeBackendBucketSignedUrlKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
