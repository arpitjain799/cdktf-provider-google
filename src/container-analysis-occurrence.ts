// https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAnalysisOccurrenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The analysis note associated with this occurrence, in the form of
projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
filter in list requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#note_name ContainerAnalysisOccurrence#note_name}
  */
  readonly noteName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#project ContainerAnalysisOccurrence#project}
  */
  readonly project?: string;
  /**
  * A description of actions that can be taken to remedy the note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#remediation ContainerAnalysisOccurrence#remediation}
  */
  readonly remediation?: string;
  /**
  * Required. Immutable. A URI that represents the resource for which
the occurrence applies. For example,
https://gcr.io/project/image@sha256:123abc for a Docker image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#resource_uri ContainerAnalysisOccurrence#resource_uri}
  */
  readonly resourceUri: string;
  /**
  * attestation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#attestation ContainerAnalysisOccurrence#attestation}
  */
  readonly attestation: ContainerAnalysisOccurrenceAttestation[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#timeouts ContainerAnalysisOccurrence#timeouts}
  */
  readonly timeouts?: ContainerAnalysisOccurrenceTimeouts;
}
export interface ContainerAnalysisOccurrenceAttestationSignatures {
  /**
  * The identifier for the public key that verifies this
signature. MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.
    * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
    * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#public_key_id ContainerAnalysisOccurrence#public_key_id}
  */
  readonly publicKeyId: string;
  /**
  * The content of the signature, an opaque bytestring.
The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#signature ContainerAnalysisOccurrence#signature}
  */
  readonly signature?: string;
}

function containerAnalysisOccurrenceAttestationSignaturesToTerraform(struct?: ContainerAnalysisOccurrenceAttestationSignatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    public_key_id: cdktf.stringToTerraform(struct!.publicKeyId),
    signature: cdktf.stringToTerraform(struct!.signature),
  }
}

export interface ContainerAnalysisOccurrenceAttestation {
  /**
  * The serialized payload that is verified by one or
more signatures. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#serialized_payload ContainerAnalysisOccurrence#serialized_payload}
  */
  readonly serializedPayload: string;
  /**
  * signatures block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#signatures ContainerAnalysisOccurrence#signatures}
  */
  readonly signatures: ContainerAnalysisOccurrenceAttestationSignatures[];
}

function containerAnalysisOccurrenceAttestationToTerraform(struct?: ContainerAnalysisOccurrenceAttestation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    serialized_payload: cdktf.stringToTerraform(struct!.serializedPayload),
    signatures: cdktf.listMapper(containerAnalysisOccurrenceAttestationSignaturesToTerraform)(struct!.signatures),
  }
}

export interface ContainerAnalysisOccurrenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#create ContainerAnalysisOccurrence#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#delete ContainerAnalysisOccurrence#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html#update ContainerAnalysisOccurrence#update}
  */
  readonly update?: string;
}

function containerAnalysisOccurrenceTimeoutsToTerraform(struct?: ContainerAnalysisOccurrenceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html google_container_analysis_occurrence}
*/
export class ContainerAnalysisOccurrence extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html google_container_analysis_occurrence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAnalysisOccurrenceConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAnalysisOccurrenceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_analysis_occurrence',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._noteName = config.noteName;
    this._project = config.project;
    this._remediation = config.remediation;
    this._resourceUri = config.resourceUri;
    this._attestation = config.attestation;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // note_name - computed: false, optional: false, required: true
  private _noteName: string;
  public get noteName() {
    return this.getStringAttribute('note_name');
  }
  public set noteName(value: string) {
    this._noteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteNameInput() {
    return this._noteName
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

  // remediation - computed: false, optional: true, required: false
  private _remediation?: string;
  public get remediation() {
    return this.getStringAttribute('remediation');
  }
  public set remediation(value: string ) {
    this._remediation = value;
  }
  public resetRemediation() {
    this._remediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation
  }

  // resource_uri - computed: false, optional: false, required: true
  private _resourceUri: string;
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }
  public set resourceUri(value: string) {
    this._resourceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUriInput() {
    return this._resourceUri
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // attestation - computed: false, optional: false, required: true
  private _attestation: ContainerAnalysisOccurrenceAttestation[];
  public get attestation() {
    return this.interpolationForAttribute('attestation') as any;
  }
  public set attestation(value: ContainerAnalysisOccurrenceAttestation[]) {
    this._attestation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationInput() {
    return this._attestation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerAnalysisOccurrenceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ContainerAnalysisOccurrenceTimeouts ) {
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
      note_name: cdktf.stringToTerraform(this._noteName),
      project: cdktf.stringToTerraform(this._project),
      remediation: cdktf.stringToTerraform(this._remediation),
      resource_uri: cdktf.stringToTerraform(this._resourceUri),
      attestation: cdktf.listMapper(containerAnalysisOccurrenceAttestationToTerraform)(this._attestation),
      timeouts: containerAnalysisOccurrenceTimeoutsToTerraform(this._timeouts),
    };
  }
}
