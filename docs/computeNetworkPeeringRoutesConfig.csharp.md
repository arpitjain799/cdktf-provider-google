# `google_compute_network_peering_routes_config`

Refer to the Terraform Registory for docs: [`google_compute_network_peering_routes_config`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config).

# `computeNetworkPeeringRoutesConfig` Submodule <a name="`computeNetworkPeeringRoutesConfig` Submodule" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkPeeringRoutesConfig <a name="ComputeNetworkPeeringRoutesConfig" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config google_compute_network_peering_routes_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkPeeringRoutesConfig(Construct Scope, string Id, ComputeNetworkPeeringRoutesConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig">ComputeNetworkPeeringRoutesConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig">ComputeNetworkPeeringRoutesConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeNetworkPeeringRoutesConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkPeeringRoutesConfig.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkPeeringRoutesConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkPeeringRoutesConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput">ExportCustomRoutesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput">ImportCustomRoutesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peeringInput">PeeringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peering">Peering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeouts"></a>

```csharp
public ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a>

---

##### `ExportCustomRoutesInput`<sup>Optional</sup> <a name="ExportCustomRoutesInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput"></a>

```csharp
public object ExportCustomRoutesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportCustomRoutesInput`<sup>Optional</sup> <a name="ImportCustomRoutesInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput"></a>

```csharp
public object ImportCustomRoutesInput { get; }
```

- *Type:* object

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PeeringInput`<sup>Optional</sup> <a name="PeeringInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peeringInput"></a>

```csharp
public string PeeringInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes"></a>

```csharp
public object ExportCustomRoutes { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutes"></a>

```csharp
public object ImportCustomRoutes { get; }
```

- *Type:* object

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peering"></a>

```csharp
public string Peering { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkPeeringRoutesConfigConfig <a name="ComputeNetworkPeeringRoutesConfigConfig" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkPeeringRoutesConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ExportCustomRoutes,
    object ImportCustomRoutes,
    string Network,
    string Peering,
    string Id = null,
    string Project = null,
    ComputeNetworkPeeringRoutesConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>object</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>object</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.network">Network</a></code> | <code>string</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.peering">Peering</a></code> | <code>string</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes"></a>

```csharp
public object ExportCustomRoutes { get; set; }
```

- *Type:* object

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#export_custom_routes ComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes"></a>

```csharp
public object ImportCustomRoutes { get; set; }
```

- *Type:* object

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#import_custom_routes ComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#network ComputeNetworkPeeringRoutesConfig#network}

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.peering"></a>

```csharp
public string Peering { get; set; }
```

- *Type:* string

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#peering ComputeNetworkPeeringRoutesConfig#peering}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.timeouts"></a>

```csharp
public ComputeNetworkPeeringRoutesConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#timeouts ComputeNetworkPeeringRoutesConfig#timeouts}

---

### ComputeNetworkPeeringRoutesConfigTimeouts <a name="ComputeNetworkPeeringRoutesConfigTimeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkPeeringRoutesConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#create ComputeNetworkPeeringRoutesConfig#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#delete ComputeNetworkPeeringRoutesConfig#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#update ComputeNetworkPeeringRoutesConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#create ComputeNetworkPeeringRoutesConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#delete ComputeNetworkPeeringRoutesConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_network_peering_routes_config#update ComputeNetworkPeeringRoutesConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference <a name="ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



