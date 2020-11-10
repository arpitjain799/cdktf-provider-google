// https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeBackendBucketSignedUrlKeyConfig extends TerraformMetaArguments {
  /** The backend bucket this signed URL key belongs. */
  readonly backendBucket: string;
  /** 128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string. */
  readonly keyValue: string;
  /** Name of the signed URL key. */
  readonly name: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ComputeBackendBucketSignedUrlKeyTimeouts;
}
export interface ComputeBackendBucketSignedUrlKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeBackendBucketSignedUrlKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      backend_bucket: this._backendBucket,
      key_value: this._keyValue,
      name: this._name,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
