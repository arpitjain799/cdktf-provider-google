// https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html#folder FolderIamBinding#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html#members FolderIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html#role FolderIamBinding#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html#condition FolderIamBinding#condition}
  */
  readonly condition?: FolderIamBindingCondition[];
}
export interface FolderIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html#description FolderIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html#expression FolderIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html#title FolderIamBinding#title}
  */
  readonly title: string;
}

function folderIamBindingConditionToTerraform(struct?: FolderIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html google_folder_iam_binding}
*/
export class FolderIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_folder_iam_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/folder_iam_binding.html google_folder_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: FolderIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._folder = config.folder;
    this._members = config.members;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: FolderIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: FolderIamBindingCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder: cdktf.stringToTerraform(this._folder),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(folderIamBindingConditionToTerraform)(this._condition),
    };
  }
}
