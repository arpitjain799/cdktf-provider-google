// https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_catalog_policy_tag_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogPolicyTagIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_catalog_policy_tag_iam_policy#id DataCatalogPolicyTagIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_catalog_policy_tag_iam_policy#policy_data DataCatalogPolicyTagIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_catalog_policy_tag_iam_policy#policy_tag DataCatalogPolicyTagIamPolicy#policy_tag}
  */
  readonly policyTag: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_catalog_policy_tag_iam_policy google_data_catalog_policy_tag_iam_policy}
*/
export class DataCatalogPolicyTagIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_catalog_policy_tag_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_catalog_policy_tag_iam_policy google_data_catalog_policy_tag_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogPolicyTagIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogPolicyTagIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_policy_tag_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.63.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._policyData = config.policyData;
    this._policyTag = config.policyTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // policy_tag - computed: false, optional: false, required: true
  private _policyTag?: string; 
  public get policyTag() {
    return this.getStringAttribute('policy_tag');
  }
  public set policyTag(value: string) {
    this._policyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTagInput() {
    return this._policyTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_data: cdktf.stringToTerraform(this._policyData),
      policy_tag: cdktf.stringToTerraform(this._policyTag),
    };
  }
}
