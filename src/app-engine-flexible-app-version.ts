// https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineFlexibleAppVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Metadata settings that are supplied to this version to enable beta runtime features.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#beta_settings AppEngineFlexibleAppVersion#beta_settings}
  */
  readonly betaSettings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#default_expiration AppEngineFlexibleAppVersion#default_expiration}
  */
  readonly defaultExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#delete_service_on_destroy AppEngineFlexibleAppVersion#delete_service_on_destroy}
  */
  readonly deleteServiceOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Environment variables available to the application.  As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#env_variables AppEngineFlexibleAppVersion#env_variables}
  */
  readonly envVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A list of the types of messages that this application is able to receive. Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#inbound_services AppEngineFlexibleAppVersion#inbound_services}
  */
  readonly inboundServices?: string[];
  /**
  * Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#instance_class AppEngineFlexibleAppVersion#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#nobuild_files_regex AppEngineFlexibleAppVersion#nobuild_files_regex}
  */
  readonly nobuildFilesRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#noop_on_destroy AppEngineFlexibleAppVersion#noop_on_destroy}
  */
  readonly noopOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#project AppEngineFlexibleAppVersion#project}
  */
  readonly project?: string;
  /**
  * Desired runtime. Example python27.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#runtime AppEngineFlexibleAppVersion#runtime}
  */
  readonly runtime: string;
  /**
  * The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#runtime_api_version AppEngineFlexibleAppVersion#runtime_api_version}
  */
  readonly runtimeApiVersion?: string;
  /**
  * The channel of the runtime to use. Only available for some runtimes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#runtime_channel AppEngineFlexibleAppVersion#runtime_channel}
  */
  readonly runtimeChannel?: string;
  /**
  * The path or name of the app's main executable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#runtime_main_executable_path AppEngineFlexibleAppVersion#runtime_main_executable_path}
  */
  readonly runtimeMainExecutablePath?: string;
  /**
  * AppEngine service resource. Can contain numbers, letters, and hyphens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#service AppEngineFlexibleAppVersion#service}
  */
  readonly service: string;
  /**
  * Current serving status of this version. Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#serving_status AppEngineFlexibleAppVersion#serving_status}
  */
  readonly servingStatus?: string;
  /**
  * Relative name of the version within the service. For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#version_id AppEngineFlexibleAppVersion#version_id}
  */
  readonly versionId?: string;
  /**
  * api_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#api_config AppEngineFlexibleAppVersion#api_config}
  */
  readonly apiConfig?: AppEngineFlexibleAppVersionApiConfig[];
  /**
  * automatic_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#automatic_scaling AppEngineFlexibleAppVersion#automatic_scaling}
  */
  readonly automaticScaling?: AppEngineFlexibleAppVersionAutomaticScaling[];
  /**
  * deployment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#deployment AppEngineFlexibleAppVersion#deployment}
  */
  readonly deployment?: AppEngineFlexibleAppVersionDeployment[];
  /**
  * endpoints_api_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#endpoints_api_service AppEngineFlexibleAppVersion#endpoints_api_service}
  */
  readonly endpointsApiService?: AppEngineFlexibleAppVersionEndpointsApiService[];
  /**
  * entrypoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#entrypoint AppEngineFlexibleAppVersion#entrypoint}
  */
  readonly entrypoint?: AppEngineFlexibleAppVersionEntrypoint[];
  /**
  * handlers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#handlers AppEngineFlexibleAppVersion#handlers}
  */
  readonly handlers?: AppEngineFlexibleAppVersionHandlers[];
  /**
  * liveness_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#liveness_check AppEngineFlexibleAppVersion#liveness_check}
  */
  readonly livenessCheck: AppEngineFlexibleAppVersionLivenessCheck[];
  /**
  * manual_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#manual_scaling AppEngineFlexibleAppVersion#manual_scaling}
  */
  readonly manualScaling?: AppEngineFlexibleAppVersionManualScaling[];
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#network AppEngineFlexibleAppVersion#network}
  */
  readonly network?: AppEngineFlexibleAppVersionNetwork[];
  /**
  * readiness_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#readiness_check AppEngineFlexibleAppVersion#readiness_check}
  */
  readonly readinessCheck: AppEngineFlexibleAppVersionReadinessCheck[];
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#resources AppEngineFlexibleAppVersion#resources}
  */
  readonly resources?: AppEngineFlexibleAppVersionResources[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#timeouts AppEngineFlexibleAppVersion#timeouts}
  */
  readonly timeouts?: AppEngineFlexibleAppVersionTimeouts;
  /**
  * vpc_access_connector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#vpc_access_connector AppEngineFlexibleAppVersion#vpc_access_connector}
  */
  readonly vpcAccessConnector?: AppEngineFlexibleAppVersionVpcAccessConnector[];
}
export interface AppEngineFlexibleAppVersionApiConfig {
  /**
  * Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}
  */
  readonly authFailAction?: string;
  /**
  * Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#login AppEngineFlexibleAppVersion#login}
  */
  readonly login?: string;
  /**
  * Path to the script from the application root directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#script AppEngineFlexibleAppVersion#script}
  */
  readonly script: string;
  /**
  * Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#security_level AppEngineFlexibleAppVersion#security_level}
  */
  readonly securityLevel?: string;
  /**
  * URL to serve the endpoint at.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#url AppEngineFlexibleAppVersion#url}
  */
  readonly url?: string;
}

function appEngineFlexibleAppVersionApiConfigToTerraform(struct?: AppEngineFlexibleAppVersionApiConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_fail_action: cdktf.stringToTerraform(struct!.authFailAction),
    login: cdktf.stringToTerraform(struct!.login),
    script: cdktf.stringToTerraform(struct!.script),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization {
  /**
  * Period of time over which CPU utilization is calculated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#aggregation_window_length AppEngineFlexibleAppVersion#aggregation_window_length}
  */
  readonly aggregationWindowLength?: string;
  /**
  * Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_utilization AppEngineFlexibleAppVersion#target_utilization}
  */
  readonly targetUtilization: number;
}

function appEngineFlexibleAppVersionAutomaticScalingCpuUtilizationToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_window_length: cdktf.stringToTerraform(struct!.aggregationWindowLength),
    target_utilization: cdktf.numberToTerraform(struct!.targetUtilization),
  }
}

export interface AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization {
  /**
  * Target bytes read per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_read_bytes_per_second AppEngineFlexibleAppVersion#target_read_bytes_per_second}
  */
  readonly targetReadBytesPerSecond?: number;
  /**
  * Target ops read per seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_read_ops_per_second AppEngineFlexibleAppVersion#target_read_ops_per_second}
  */
  readonly targetReadOpsPerSecond?: number;
  /**
  * Target bytes written per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_write_bytes_per_second AppEngineFlexibleAppVersion#target_write_bytes_per_second}
  */
  readonly targetWriteBytesPerSecond?: number;
  /**
  * Target ops written per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_write_ops_per_second AppEngineFlexibleAppVersion#target_write_ops_per_second}
  */
  readonly targetWriteOpsPerSecond?: number;
}

function appEngineFlexibleAppVersionAutomaticScalingDiskUtilizationToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_read_bytes_per_second: cdktf.numberToTerraform(struct!.targetReadBytesPerSecond),
    target_read_ops_per_second: cdktf.numberToTerraform(struct!.targetReadOpsPerSecond),
    target_write_bytes_per_second: cdktf.numberToTerraform(struct!.targetWriteBytesPerSecond),
    target_write_ops_per_second: cdktf.numberToTerraform(struct!.targetWriteOpsPerSecond),
  }
}

export interface AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization {
  /**
  * Target bytes received per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_received_bytes_per_second AppEngineFlexibleAppVersion#target_received_bytes_per_second}
  */
  readonly targetReceivedBytesPerSecond?: number;
  /**
  * Target packets received per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_received_packets_per_second AppEngineFlexibleAppVersion#target_received_packets_per_second}
  */
  readonly targetReceivedPacketsPerSecond?: number;
  /**
  * Target bytes sent per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_sent_bytes_per_second AppEngineFlexibleAppVersion#target_sent_bytes_per_second}
  */
  readonly targetSentBytesPerSecond?: number;
  /**
  * Target packets sent per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_sent_packets_per_second AppEngineFlexibleAppVersion#target_sent_packets_per_second}
  */
  readonly targetSentPacketsPerSecond?: number;
}

function appEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_received_bytes_per_second: cdktf.numberToTerraform(struct!.targetReceivedBytesPerSecond),
    target_received_packets_per_second: cdktf.numberToTerraform(struct!.targetReceivedPacketsPerSecond),
    target_sent_bytes_per_second: cdktf.numberToTerraform(struct!.targetSentBytesPerSecond),
    target_sent_packets_per_second: cdktf.numberToTerraform(struct!.targetSentPacketsPerSecond),
  }
}

export interface AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization {
  /**
  * Target number of concurrent requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_concurrent_requests AppEngineFlexibleAppVersion#target_concurrent_requests}
  */
  readonly targetConcurrentRequests?: number;
  /**
  * Target requests per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#target_request_count_per_second AppEngineFlexibleAppVersion#target_request_count_per_second}
  */
  readonly targetRequestCountPerSecond?: string;
}

function appEngineFlexibleAppVersionAutomaticScalingRequestUtilizationToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_concurrent_requests: cdktf.numberToTerraform(struct!.targetConcurrentRequests),
    target_request_count_per_second: cdktf.stringToTerraform(struct!.targetRequestCountPerSecond),
  }
}

export interface AppEngineFlexibleAppVersionAutomaticScaling {
  /**
  * The time period that the Autoscaler should wait before it starts collecting information from a new instance.
This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#cool_down_period AppEngineFlexibleAppVersion#cool_down_period}
  */
  readonly coolDownPeriod?: string;
  /**
  * Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#max_concurrent_requests AppEngineFlexibleAppVersion#max_concurrent_requests}
  */
  readonly maxConcurrentRequests?: number;
  /**
  * Maximum number of idle instances that should be maintained for this version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#max_idle_instances AppEngineFlexibleAppVersion#max_idle_instances}
  */
  readonly maxIdleInstances?: number;
  /**
  * Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#max_pending_latency AppEngineFlexibleAppVersion#max_pending_latency}
  */
  readonly maxPendingLatency?: string;
  /**
  * Maximum number of instances that should be started to handle requests for this version. Default: 20
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#max_total_instances AppEngineFlexibleAppVersion#max_total_instances}
  */
  readonly maxTotalInstances?: number;
  /**
  * Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#min_idle_instances AppEngineFlexibleAppVersion#min_idle_instances}
  */
  readonly minIdleInstances?: number;
  /**
  * Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#min_pending_latency AppEngineFlexibleAppVersion#min_pending_latency}
  */
  readonly minPendingLatency?: string;
  /**
  * Minimum number of running instances that should be maintained for this version. Default: 2
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#min_total_instances AppEngineFlexibleAppVersion#min_total_instances}
  */
  readonly minTotalInstances?: number;
  /**
  * cpu_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#cpu_utilization AppEngineFlexibleAppVersion#cpu_utilization}
  */
  readonly cpuUtilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization[];
  /**
  * disk_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#disk_utilization AppEngineFlexibleAppVersion#disk_utilization}
  */
  readonly diskUtilization?: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization[];
  /**
  * network_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#network_utilization AppEngineFlexibleAppVersion#network_utilization}
  */
  readonly networkUtilization?: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization[];
  /**
  * request_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#request_utilization AppEngineFlexibleAppVersion#request_utilization}
  */
  readonly requestUtilization?: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization[];
}

function appEngineFlexibleAppVersionAutomaticScalingToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cool_down_period: cdktf.stringToTerraform(struct!.coolDownPeriod),
    max_concurrent_requests: cdktf.numberToTerraform(struct!.maxConcurrentRequests),
    max_idle_instances: cdktf.numberToTerraform(struct!.maxIdleInstances),
    max_pending_latency: cdktf.stringToTerraform(struct!.maxPendingLatency),
    max_total_instances: cdktf.numberToTerraform(struct!.maxTotalInstances),
    min_idle_instances: cdktf.numberToTerraform(struct!.minIdleInstances),
    min_pending_latency: cdktf.stringToTerraform(struct!.minPendingLatency),
    min_total_instances: cdktf.numberToTerraform(struct!.minTotalInstances),
    cpu_utilization: cdktf.listMapper(appEngineFlexibleAppVersionAutomaticScalingCpuUtilizationToTerraform)(struct!.cpuUtilization),
    disk_utilization: cdktf.listMapper(appEngineFlexibleAppVersionAutomaticScalingDiskUtilizationToTerraform)(struct!.diskUtilization),
    network_utilization: cdktf.listMapper(appEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationToTerraform)(struct!.networkUtilization),
    request_utilization: cdktf.listMapper(appEngineFlexibleAppVersionAutomaticScalingRequestUtilizationToTerraform)(struct!.requestUtilization),
  }
}

export interface AppEngineFlexibleAppVersionDeploymentCloudBuildOptions {
  /**
  * Path to the yaml file used in deployment, used to determine runtime configuration details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#app_yaml_path AppEngineFlexibleAppVersion#app_yaml_path}
  */
  readonly appYamlPath: string;
  /**
  * The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#cloud_build_timeout AppEngineFlexibleAppVersion#cloud_build_timeout}
  */
  readonly cloudBuildTimeout?: string;
}

function appEngineFlexibleAppVersionDeploymentCloudBuildOptionsToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_yaml_path: cdktf.stringToTerraform(struct!.appYamlPath),
    cloud_build_timeout: cdktf.stringToTerraform(struct!.cloudBuildTimeout),
  }
}

export interface AppEngineFlexibleAppVersionDeploymentContainer {
  /**
  * URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#image AppEngineFlexibleAppVersion#image}
  */
  readonly image: string;
}

function appEngineFlexibleAppVersionDeploymentContainerToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
  }
}

export interface AppEngineFlexibleAppVersionDeploymentFiles {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
  /**
  * SHA1 checksum of the file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#sha1_sum AppEngineFlexibleAppVersion#sha1_sum}
  */
  readonly sha1Sum?: string;
  /**
  * Source URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#source_url AppEngineFlexibleAppVersion#source_url}
  */
  readonly sourceUrl: string;
}

function appEngineFlexibleAppVersionDeploymentFilesToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentFiles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sha1_sum: cdktf.stringToTerraform(struct!.sha1Sum),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}

export interface AppEngineFlexibleAppVersionDeploymentZip {
  /**
  * files count
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#files_count AppEngineFlexibleAppVersion#files_count}
  */
  readonly filesCount?: number;
  /**
  * Source URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#source_url AppEngineFlexibleAppVersion#source_url}
  */
  readonly sourceUrl: string;
}

function appEngineFlexibleAppVersionDeploymentZipToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentZip): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    files_count: cdktf.numberToTerraform(struct!.filesCount),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}

export interface AppEngineFlexibleAppVersionDeployment {
  /**
  * cloud_build_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#cloud_build_options AppEngineFlexibleAppVersion#cloud_build_options}
  */
  readonly cloudBuildOptions?: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions[];
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#container AppEngineFlexibleAppVersion#container}
  */
  readonly container?: AppEngineFlexibleAppVersionDeploymentContainer[];
  /**
  * files block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#files AppEngineFlexibleAppVersion#files}
  */
  readonly files?: AppEngineFlexibleAppVersionDeploymentFiles[];
  /**
  * zip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#zip AppEngineFlexibleAppVersion#zip}
  */
  readonly zip?: AppEngineFlexibleAppVersionDeploymentZip[];
}

function appEngineFlexibleAppVersionDeploymentToTerraform(struct?: AppEngineFlexibleAppVersionDeployment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_build_options: cdktf.listMapper(appEngineFlexibleAppVersionDeploymentCloudBuildOptionsToTerraform)(struct!.cloudBuildOptions),
    container: cdktf.listMapper(appEngineFlexibleAppVersionDeploymentContainerToTerraform)(struct!.container),
    files: cdktf.listMapper(appEngineFlexibleAppVersionDeploymentFilesToTerraform)(struct!.files),
    zip: cdktf.listMapper(appEngineFlexibleAppVersionDeploymentZipToTerraform)(struct!.zip),
  }
}

export interface AppEngineFlexibleAppVersionEndpointsApiService {
  /**
  * Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#config_id AppEngineFlexibleAppVersion#config_id}
  */
  readonly configId?: string;
  /**
  * Enable or disable trace sampling. By default, this is set to false for enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#disable_trace_sampling AppEngineFlexibleAppVersion#disable_trace_sampling}
  */
  readonly disableTraceSampling?: boolean | cdktf.IResolvable;
  /**
  * Endpoints service name which is the name of the "service" resource in the Service Management API.
For example "myapi.endpoints.myproject.cloud.goog"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
  /**
  * Endpoints rollout strategy. If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#rollout_strategy AppEngineFlexibleAppVersion#rollout_strategy}
  */
  readonly rolloutStrategy?: string;
}

function appEngineFlexibleAppVersionEndpointsApiServiceToTerraform(struct?: AppEngineFlexibleAppVersionEndpointsApiService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    disable_trace_sampling: cdktf.booleanToTerraform(struct!.disableTraceSampling),
    name: cdktf.stringToTerraform(struct!.name),
    rollout_strategy: cdktf.stringToTerraform(struct!.rolloutStrategy),
  }
}

export interface AppEngineFlexibleAppVersionEntrypoint {
  /**
  * The format should be a shell command that can be fed to bash -c.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#shell AppEngineFlexibleAppVersion#shell}
  */
  readonly shell: string;
}

function appEngineFlexibleAppVersionEntrypointToTerraform(struct?: AppEngineFlexibleAppVersionEntrypoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}

export interface AppEngineFlexibleAppVersionHandlersScript {
  /**
  * Path to the script from the application root directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#script_path AppEngineFlexibleAppVersion#script_path}
  */
  readonly scriptPath: string;
}

function appEngineFlexibleAppVersionHandlersScriptToTerraform(struct?: AppEngineFlexibleAppVersionHandlersScript): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
  }
}

export interface AppEngineFlexibleAppVersionHandlersStaticFiles {
  /**
  * Whether files should also be uploaded as code data. By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#application_readable AppEngineFlexibleAppVersion#application_readable}
  */
  readonly applicationReadable?: boolean | cdktf.IResolvable;
  /**
  * Time a static file served by this handler should be cached by web proxies and browsers.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#expiration AppEngineFlexibleAppVersion#expiration}
  */
  readonly expiration?: string;
  /**
  * HTTP headers to use for all responses from these URLs.
An object containing a list of "key:value" value pairs.".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#http_headers AppEngineFlexibleAppVersion#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * MIME type used to serve all files served by this handler.
Defaults to file-specific MIME types, which are derived from each file's filename extension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#mime_type AppEngineFlexibleAppVersion#mime_type}
  */
  readonly mimeType?: string;
  /**
  * Path to the static files matched by the URL pattern, from the application root directory.
The path can refer to text matched in groupings in the URL pattern.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#path AppEngineFlexibleAppVersion#path}
  */
  readonly path?: string;
  /**
  * Whether this handler should match the request if the file referenced by the handler does not exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#require_matching_file AppEngineFlexibleAppVersion#require_matching_file}
  */
  readonly requireMatchingFile?: boolean | cdktf.IResolvable;
  /**
  * Regular expression that matches the file paths for all files that should be referenced by this handler.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#upload_path_regex AppEngineFlexibleAppVersion#upload_path_regex}
  */
  readonly uploadPathRegex?: string;
}

function appEngineFlexibleAppVersionHandlersStaticFilesToTerraform(struct?: AppEngineFlexibleAppVersionHandlersStaticFiles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_readable: cdktf.booleanToTerraform(struct!.applicationReadable),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    http_headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.httpHeaders),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
    path: cdktf.stringToTerraform(struct!.path),
    require_matching_file: cdktf.booleanToTerraform(struct!.requireMatchingFile),
    upload_path_regex: cdktf.stringToTerraform(struct!.uploadPathRegex),
  }
}

export interface AppEngineFlexibleAppVersionHandlers {
  /**
  * Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}
  */
  readonly authFailAction?: string;
  /**
  * Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#login AppEngineFlexibleAppVersion#login}
  */
  readonly login?: string;
  /**
  * 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#redirect_http_response_code AppEngineFlexibleAppVersion#redirect_http_response_code}
  */
  readonly redirectHttpResponseCode?: string;
  /**
  * Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#security_level AppEngineFlexibleAppVersion#security_level}
  */
  readonly securityLevel?: string;
  /**
  * URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#url_regex AppEngineFlexibleAppVersion#url_regex}
  */
  readonly urlRegex?: string;
  /**
  * script block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#script AppEngineFlexibleAppVersion#script}
  */
  readonly script?: AppEngineFlexibleAppVersionHandlersScript[];
  /**
  * static_files block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#static_files AppEngineFlexibleAppVersion#static_files}
  */
  readonly staticFiles?: AppEngineFlexibleAppVersionHandlersStaticFiles[];
}

function appEngineFlexibleAppVersionHandlersToTerraform(struct?: AppEngineFlexibleAppVersionHandlers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_fail_action: cdktf.stringToTerraform(struct!.authFailAction),
    login: cdktf.stringToTerraform(struct!.login),
    redirect_http_response_code: cdktf.stringToTerraform(struct!.redirectHttpResponseCode),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    url_regex: cdktf.stringToTerraform(struct!.urlRegex),
    script: cdktf.listMapper(appEngineFlexibleAppVersionHandlersScriptToTerraform)(struct!.script),
    static_files: cdktf.listMapper(appEngineFlexibleAppVersionHandlersStaticFilesToTerraform)(struct!.staticFiles),
  }
}

export interface AppEngineFlexibleAppVersionLivenessCheck {
  /**
  * Interval between health checks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#check_interval AppEngineFlexibleAppVersion#check_interval}
  */
  readonly checkInterval?: string;
  /**
  * Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#host AppEngineFlexibleAppVersion#host}
  */
  readonly host?: string;
  /**
  * The initial delay before starting to execute the checks. Default: "300s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#initial_delay AppEngineFlexibleAppVersion#initial_delay}
  */
  readonly initialDelay?: string;
  /**
  * The request path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#path AppEngineFlexibleAppVersion#path}
  */
  readonly path: string;
  /**
  * Number of consecutive successful checks required before considering the VM healthy. Default: 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#success_threshold AppEngineFlexibleAppVersion#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Time before the check is considered failed. Default: "4s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#timeout AppEngineFlexibleAppVersion#timeout}
  */
  readonly timeout?: string;
}

function appEngineFlexibleAppVersionLivenessCheckToTerraform(struct?: AppEngineFlexibleAppVersionLivenessCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    check_interval: cdktf.stringToTerraform(struct!.checkInterval),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    host: cdktf.stringToTerraform(struct!.host),
    initial_delay: cdktf.stringToTerraform(struct!.initialDelay),
    path: cdktf.stringToTerraform(struct!.path),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export interface AppEngineFlexibleAppVersionManualScaling {
  /**
  * Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#instances AppEngineFlexibleAppVersion#instances}
  */
  readonly instances: number;
}

function appEngineFlexibleAppVersionManualScalingToTerraform(struct?: AppEngineFlexibleAppVersionManualScaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instances: cdktf.numberToTerraform(struct!.instances),
  }
}

export interface AppEngineFlexibleAppVersionNetwork {
  /**
  * List of ports, or port pairs, to forward from the virtual machine to the application container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#forwarded_ports AppEngineFlexibleAppVersion#forwarded_ports}
  */
  readonly forwardedPorts?: string[];
  /**
  * Tag to apply to the instance during creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#instance_tag AppEngineFlexibleAppVersion#instance_tag}
  */
  readonly instanceTag?: string;
  /**
  * Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
  /**
  * Enable session affinity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#session_affinity AppEngineFlexibleAppVersion#session_affinity}
  */
  readonly sessionAffinity?: boolean | cdktf.IResolvable;
  /**
  * Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#subnetwork AppEngineFlexibleAppVersion#subnetwork}
  */
  readonly subnetwork?: string;
}

function appEngineFlexibleAppVersionNetworkToTerraform(struct?: AppEngineFlexibleAppVersionNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forwarded_ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.forwardedPorts),
    instance_tag: cdktf.stringToTerraform(struct!.instanceTag),
    name: cdktf.stringToTerraform(struct!.name),
    session_affinity: cdktf.booleanToTerraform(struct!.sessionAffinity),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}

export interface AppEngineFlexibleAppVersionReadinessCheck {
  /**
  * A maximum time limit on application initialization, measured from moment the application successfully
replies to a healthcheck until it is ready to serve traffic. Default: "300s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#app_start_timeout AppEngineFlexibleAppVersion#app_start_timeout}
  */
  readonly appStartTimeout?: string;
  /**
  * Interval between health checks.  Default: "5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#check_interval AppEngineFlexibleAppVersion#check_interval}
  */
  readonly checkInterval?: string;
  /**
  * Number of consecutive failed checks required before removing traffic. Default: 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#host AppEngineFlexibleAppVersion#host}
  */
  readonly host?: string;
  /**
  * The request path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#path AppEngineFlexibleAppVersion#path}
  */
  readonly path: string;
  /**
  * Number of consecutive successful checks required before receiving traffic. Default: 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#success_threshold AppEngineFlexibleAppVersion#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Time before the check is considered failed. Default: "4s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#timeout AppEngineFlexibleAppVersion#timeout}
  */
  readonly timeout?: string;
}

function appEngineFlexibleAppVersionReadinessCheckToTerraform(struct?: AppEngineFlexibleAppVersionReadinessCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_start_timeout: cdktf.stringToTerraform(struct!.appStartTimeout),
    check_interval: cdktf.stringToTerraform(struct!.checkInterval),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export interface AppEngineFlexibleAppVersionResourcesVolumes {
  /**
  * Unique name for the volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
  /**
  * Volume size in gigabytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#size_gb AppEngineFlexibleAppVersion#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Underlying volume type, e.g. 'tmpfs'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#volume_type AppEngineFlexibleAppVersion#volume_type}
  */
  readonly volumeType: string;
}

function appEngineFlexibleAppVersionResourcesVolumesToTerraform(struct?: AppEngineFlexibleAppVersionResourcesVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface AppEngineFlexibleAppVersionResources {
  /**
  * Number of CPU cores needed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#cpu AppEngineFlexibleAppVersion#cpu}
  */
  readonly cpu?: number;
  /**
  * Disk size (GB) needed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#disk_gb AppEngineFlexibleAppVersion#disk_gb}
  */
  readonly diskGb?: number;
  /**
  * Memory (GB) needed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#memory_gb AppEngineFlexibleAppVersion#memory_gb}
  */
  readonly memoryGb?: number;
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#volumes AppEngineFlexibleAppVersion#volumes}
  */
  readonly volumes?: AppEngineFlexibleAppVersionResourcesVolumes[];
}

function appEngineFlexibleAppVersionResourcesToTerraform(struct?: AppEngineFlexibleAppVersionResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_gb: cdktf.numberToTerraform(struct!.diskGb),
    memory_gb: cdktf.numberToTerraform(struct!.memoryGb),
    volumes: cdktf.listMapper(appEngineFlexibleAppVersionResourcesVolumesToTerraform)(struct!.volumes),
  }
}

export interface AppEngineFlexibleAppVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#create AppEngineFlexibleAppVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#delete AppEngineFlexibleAppVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#update AppEngineFlexibleAppVersion#update}
  */
  readonly update?: string;
}

function appEngineFlexibleAppVersionTimeoutsToTerraform(struct?: AppEngineFlexibleAppVersionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface AppEngineFlexibleAppVersionVpcAccessConnector {
  /**
  * Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
}

function appEngineFlexibleAppVersionVpcAccessConnectorToTerraform(struct?: AppEngineFlexibleAppVersionVpcAccessConnector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html google_app_engine_flexible_app_version}
*/
export class AppEngineFlexibleAppVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_app_engine_flexible_app_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html google_app_engine_flexible_app_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineFlexibleAppVersionConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineFlexibleAppVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_flexible_app_version',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._betaSettings = config.betaSettings;
    this._defaultExpiration = config.defaultExpiration;
    this._deleteServiceOnDestroy = config.deleteServiceOnDestroy;
    this._envVariables = config.envVariables;
    this._inboundServices = config.inboundServices;
    this._instanceClass = config.instanceClass;
    this._nobuildFilesRegex = config.nobuildFilesRegex;
    this._noopOnDestroy = config.noopOnDestroy;
    this._project = config.project;
    this._runtime = config.runtime;
    this._runtimeApiVersion = config.runtimeApiVersion;
    this._runtimeChannel = config.runtimeChannel;
    this._runtimeMainExecutablePath = config.runtimeMainExecutablePath;
    this._service = config.service;
    this._servingStatus = config.servingStatus;
    this._versionId = config.versionId;
    this._apiConfig = config.apiConfig;
    this._automaticScaling = config.automaticScaling;
    this._deployment = config.deployment;
    this._endpointsApiService = config.endpointsApiService;
    this._entrypoint = config.entrypoint;
    this._handlers = config.handlers;
    this._livenessCheck = config.livenessCheck;
    this._manualScaling = config.manualScaling;
    this._network = config.network;
    this._readinessCheck = config.readinessCheck;
    this._resources = config.resources;
    this._timeouts = config.timeouts;
    this._vpcAccessConnector = config.vpcAccessConnector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beta_settings - computed: false, optional: true, required: false
  private _betaSettings?: { [key: string]: string } | cdktf.IResolvable;
  public get betaSettings() {
    return this.interpolationForAttribute('beta_settings') as any;
  }
  public set betaSettings(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._betaSettings = value;
  }
  public resetBetaSettings() {
    this._betaSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaSettingsInput() {
    return this._betaSettings
  }

  // default_expiration - computed: false, optional: true, required: false
  private _defaultExpiration?: string;
  public get defaultExpiration() {
    return this.getStringAttribute('default_expiration');
  }
  public set defaultExpiration(value: string ) {
    this._defaultExpiration = value;
  }
  public resetDefaultExpiration() {
    this._defaultExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExpirationInput() {
    return this._defaultExpiration
  }

  // delete_service_on_destroy - computed: false, optional: true, required: false
  private _deleteServiceOnDestroy?: boolean | cdktf.IResolvable;
  public get deleteServiceOnDestroy() {
    return this.getBooleanAttribute('delete_service_on_destroy');
  }
  public set deleteServiceOnDestroy(value: boolean | cdktf.IResolvable ) {
    this._deleteServiceOnDestroy = value;
  }
  public resetDeleteServiceOnDestroy() {
    this._deleteServiceOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteServiceOnDestroyInput() {
    return this._deleteServiceOnDestroy
  }

  // env_variables - computed: false, optional: true, required: false
  private _envVariables?: { [key: string]: string } | cdktf.IResolvable;
  public get envVariables() {
    return this.interpolationForAttribute('env_variables') as any;
  }
  public set envVariables(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._envVariables = value;
  }
  public resetEnvVariables() {
    this._envVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVariablesInput() {
    return this._envVariables
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_services - computed: false, optional: true, required: false
  private _inboundServices?: string[];
  public get inboundServices() {
    return this.getListAttribute('inbound_services');
  }
  public set inboundServices(value: string[] ) {
    this._inboundServices = value;
  }
  public resetInboundServices() {
    this._inboundServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundServicesInput() {
    return this._inboundServices
  }

  // instance_class - computed: false, optional: true, required: false
  private _instanceClass?: string;
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string ) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nobuild_files_regex - computed: false, optional: true, required: false
  private _nobuildFilesRegex?: string;
  public get nobuildFilesRegex() {
    return this.getStringAttribute('nobuild_files_regex');
  }
  public set nobuildFilesRegex(value: string ) {
    this._nobuildFilesRegex = value;
  }
  public resetNobuildFilesRegex() {
    this._nobuildFilesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nobuildFilesRegexInput() {
    return this._nobuildFilesRegex
  }

  // noop_on_destroy - computed: false, optional: true, required: false
  private _noopOnDestroy?: boolean | cdktf.IResolvable;
  public get noopOnDestroy() {
    return this.getBooleanAttribute('noop_on_destroy');
  }
  public set noopOnDestroy(value: boolean | cdktf.IResolvable ) {
    this._noopOnDestroy = value;
  }
  public resetNoopOnDestroy() {
    this._noopOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noopOnDestroyInput() {
    return this._noopOnDestroy
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

  // runtime - computed: false, optional: false, required: true
  private _runtime: string;
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime
  }

  // runtime_api_version - computed: true, optional: true, required: false
  private _runtimeApiVersion?: string;
  public get runtimeApiVersion() {
    return this.getStringAttribute('runtime_api_version');
  }
  public set runtimeApiVersion(value: string) {
    this._runtimeApiVersion = value;
  }
  public resetRuntimeApiVersion() {
    this._runtimeApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeApiVersionInput() {
    return this._runtimeApiVersion
  }

  // runtime_channel - computed: false, optional: true, required: false
  private _runtimeChannel?: string;
  public get runtimeChannel() {
    return this.getStringAttribute('runtime_channel');
  }
  public set runtimeChannel(value: string ) {
    this._runtimeChannel = value;
  }
  public resetRuntimeChannel() {
    this._runtimeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeChannelInput() {
    return this._runtimeChannel
  }

  // runtime_main_executable_path - computed: false, optional: true, required: false
  private _runtimeMainExecutablePath?: string;
  public get runtimeMainExecutablePath() {
    return this.getStringAttribute('runtime_main_executable_path');
  }
  public set runtimeMainExecutablePath(value: string ) {
    this._runtimeMainExecutablePath = value;
  }
  public resetRuntimeMainExecutablePath() {
    this._runtimeMainExecutablePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeMainExecutablePathInput() {
    return this._runtimeMainExecutablePath
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // serving_status - computed: false, optional: true, required: false
  private _servingStatus?: string;
  public get servingStatus() {
    return this.getStringAttribute('serving_status');
  }
  public set servingStatus(value: string ) {
    this._servingStatus = value;
  }
  public resetServingStatus() {
    this._servingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingStatusInput() {
    return this._servingStatus
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string ) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }

  // api_config - computed: false, optional: true, required: false
  private _apiConfig?: AppEngineFlexibleAppVersionApiConfig[];
  public get apiConfig() {
    return this.interpolationForAttribute('api_config') as any;
  }
  public set apiConfig(value: AppEngineFlexibleAppVersionApiConfig[] ) {
    this._apiConfig = value;
  }
  public resetApiConfig() {
    this._apiConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigInput() {
    return this._apiConfig
  }

  // automatic_scaling - computed: false, optional: true, required: false
  private _automaticScaling?: AppEngineFlexibleAppVersionAutomaticScaling[];
  public get automaticScaling() {
    return this.interpolationForAttribute('automatic_scaling') as any;
  }
  public set automaticScaling(value: AppEngineFlexibleAppVersionAutomaticScaling[] ) {
    this._automaticScaling = value;
  }
  public resetAutomaticScaling() {
    this._automaticScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticScalingInput() {
    return this._automaticScaling
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment?: AppEngineFlexibleAppVersionDeployment[];
  public get deployment() {
    return this.interpolationForAttribute('deployment') as any;
  }
  public set deployment(value: AppEngineFlexibleAppVersionDeployment[] ) {
    this._deployment = value;
  }
  public resetDeployment() {
    this._deployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment
  }

  // endpoints_api_service - computed: false, optional: true, required: false
  private _endpointsApiService?: AppEngineFlexibleAppVersionEndpointsApiService[];
  public get endpointsApiService() {
    return this.interpolationForAttribute('endpoints_api_service') as any;
  }
  public set endpointsApiService(value: AppEngineFlexibleAppVersionEndpointsApiService[] ) {
    this._endpointsApiService = value;
  }
  public resetEndpointsApiService() {
    this._endpointsApiService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsApiServiceInput() {
    return this._endpointsApiService
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: AppEngineFlexibleAppVersionEntrypoint[];
  public get entrypoint() {
    return this.interpolationForAttribute('entrypoint') as any;
  }
  public set entrypoint(value: AppEngineFlexibleAppVersionEntrypoint[] ) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint
  }

  // handlers - computed: false, optional: true, required: false
  private _handlers?: AppEngineFlexibleAppVersionHandlers[];
  public get handlers() {
    return this.interpolationForAttribute('handlers') as any;
  }
  public set handlers(value: AppEngineFlexibleAppVersionHandlers[] ) {
    this._handlers = value;
  }
  public resetHandlers() {
    this._handlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlersInput() {
    return this._handlers
  }

  // liveness_check - computed: false, optional: false, required: true
  private _livenessCheck: AppEngineFlexibleAppVersionLivenessCheck[];
  public get livenessCheck() {
    return this.interpolationForAttribute('liveness_check') as any;
  }
  public set livenessCheck(value: AppEngineFlexibleAppVersionLivenessCheck[]) {
    this._livenessCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessCheckInput() {
    return this._livenessCheck
  }

  // manual_scaling - computed: false, optional: true, required: false
  private _manualScaling?: AppEngineFlexibleAppVersionManualScaling[];
  public get manualScaling() {
    return this.interpolationForAttribute('manual_scaling') as any;
  }
  public set manualScaling(value: AppEngineFlexibleAppVersionManualScaling[] ) {
    this._manualScaling = value;
  }
  public resetManualScaling() {
    this._manualScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualScalingInput() {
    return this._manualScaling
  }

  // network - computed: false, optional: true, required: false
  private _network?: AppEngineFlexibleAppVersionNetwork[];
  public get network() {
    return this.interpolationForAttribute('network') as any;
  }
  public set network(value: AppEngineFlexibleAppVersionNetwork[] ) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // readiness_check - computed: false, optional: false, required: true
  private _readinessCheck: AppEngineFlexibleAppVersionReadinessCheck[];
  public get readinessCheck() {
    return this.interpolationForAttribute('readiness_check') as any;
  }
  public set readinessCheck(value: AppEngineFlexibleAppVersionReadinessCheck[]) {
    this._readinessCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessCheckInput() {
    return this._readinessCheck
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: AppEngineFlexibleAppVersionResources[];
  public get resources() {
    return this.interpolationForAttribute('resources') as any;
  }
  public set resources(value: AppEngineFlexibleAppVersionResources[] ) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineFlexibleAppVersionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppEngineFlexibleAppVersionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vpc_access_connector - computed: false, optional: true, required: false
  private _vpcAccessConnector?: AppEngineFlexibleAppVersionVpcAccessConnector[];
  public get vpcAccessConnector() {
    return this.interpolationForAttribute('vpc_access_connector') as any;
  }
  public set vpcAccessConnector(value: AppEngineFlexibleAppVersionVpcAccessConnector[] ) {
    this._vpcAccessConnector = value;
  }
  public resetVpcAccessConnector() {
    this._vpcAccessConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessConnectorInput() {
    return this._vpcAccessConnector
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      beta_settings: cdktf.hashMapper(cdktf.anyToTerraform)(this._betaSettings),
      default_expiration: cdktf.stringToTerraform(this._defaultExpiration),
      delete_service_on_destroy: cdktf.booleanToTerraform(this._deleteServiceOnDestroy),
      env_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._envVariables),
      inbound_services: cdktf.listMapper(cdktf.stringToTerraform)(this._inboundServices),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      nobuild_files_regex: cdktf.stringToTerraform(this._nobuildFilesRegex),
      noop_on_destroy: cdktf.booleanToTerraform(this._noopOnDestroy),
      project: cdktf.stringToTerraform(this._project),
      runtime: cdktf.stringToTerraform(this._runtime),
      runtime_api_version: cdktf.stringToTerraform(this._runtimeApiVersion),
      runtime_channel: cdktf.stringToTerraform(this._runtimeChannel),
      runtime_main_executable_path: cdktf.stringToTerraform(this._runtimeMainExecutablePath),
      service: cdktf.stringToTerraform(this._service),
      serving_status: cdktf.stringToTerraform(this._servingStatus),
      version_id: cdktf.stringToTerraform(this._versionId),
      api_config: cdktf.listMapper(appEngineFlexibleAppVersionApiConfigToTerraform)(this._apiConfig),
      automatic_scaling: cdktf.listMapper(appEngineFlexibleAppVersionAutomaticScalingToTerraform)(this._automaticScaling),
      deployment: cdktf.listMapper(appEngineFlexibleAppVersionDeploymentToTerraform)(this._deployment),
      endpoints_api_service: cdktf.listMapper(appEngineFlexibleAppVersionEndpointsApiServiceToTerraform)(this._endpointsApiService),
      entrypoint: cdktf.listMapper(appEngineFlexibleAppVersionEntrypointToTerraform)(this._entrypoint),
      handlers: cdktf.listMapper(appEngineFlexibleAppVersionHandlersToTerraform)(this._handlers),
      liveness_check: cdktf.listMapper(appEngineFlexibleAppVersionLivenessCheckToTerraform)(this._livenessCheck),
      manual_scaling: cdktf.listMapper(appEngineFlexibleAppVersionManualScalingToTerraform)(this._manualScaling),
      network: cdktf.listMapper(appEngineFlexibleAppVersionNetworkToTerraform)(this._network),
      readiness_check: cdktf.listMapper(appEngineFlexibleAppVersionReadinessCheckToTerraform)(this._readinessCheck),
      resources: cdktf.listMapper(appEngineFlexibleAppVersionResourcesToTerraform)(this._resources),
      timeouts: appEngineFlexibleAppVersionTimeoutsToTerraform(this._timeouts),
      vpc_access_connector: cdktf.listMapper(appEngineFlexibleAppVersionVpcAccessConnectorToTerraform)(this._vpcAccessConnector),
    };
  }
}
