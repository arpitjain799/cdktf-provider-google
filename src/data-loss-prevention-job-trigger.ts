// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionJobTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the job trigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#description DataLossPreventionJobTrigger#description}
  */
  readonly description?: string;
  /**
  * User set display name of the job trigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#display_name DataLossPreventionJobTrigger#display_name}
  */
  readonly displayName?: string;
  /**
  * The parent of the trigger, either in the format 'projects/{{project}}'
or 'projects/{{project}}/locations/{{location}}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#parent DataLossPreventionJobTrigger#parent}
  */
  readonly parent: string;
  /**
  * Whether the trigger is currently active. Default value: "HEALTHY" Possible values: ["PAUSED", "HEALTHY", "CANCELLED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#status DataLossPreventionJobTrigger#status}
  */
  readonly status?: string;
  /**
  * inspect_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#inspect_job DataLossPreventionJobTrigger#inspect_job}
  */
  readonly inspectJob?: DataLossPreventionJobTriggerInspectJob[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#timeouts DataLossPreventionJobTrigger#timeouts}
  */
  readonly timeouts?: DataLossPreventionJobTriggerTimeouts;
  /**
  * triggers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#triggers DataLossPreventionJobTrigger#triggers}
  */
  readonly triggers: DataLossPreventionJobTriggerTriggers[];
}
export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable {
  /**
  * Dataset ID of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#dataset_id DataLossPreventionJobTrigger#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * Name of the table. If is not set a new one will be generated for you with the following format:
'dlp_googleapis_yyyy_mm_dd_[dlp_job_id]'. Pacific timezone will be used for generating the date details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#table_id DataLossPreventionJobTrigger#table_id}
  */
  readonly tableId?: string;
}

function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig {
  /**
  * Schema used for writing the findings for Inspect jobs. This field is only used for
Inspect and must be unspecified for Risk jobs. Columns are derived from the Finding
object. If appending to an existing table, any columns from the predefined schema
that are missing will be added. No columns in the existing table will be deleted.

If unspecified, then all available columns will be used for a new table or an (existing)
table with no schema, and no changes will be made to an existing table that has a schema.
Only for use with external storage. Possible values: ["BASIC_COLUMNS", "GCS_COLUMNS", "DATASTORE_COLUMNS", "BIG_QUERY_COLUMNS", "ALL_COLUMNS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#output_schema DataLossPreventionJobTrigger#output_schema}
  */
  readonly outputSchema?: string;
  /**
  * table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#table DataLossPreventionJobTrigger#table}
  */
  readonly table: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable[];
}

function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    output_schema: cdktf.stringToTerraform(struct!.outputSchema),
    table: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableToTerraform)(struct!.table),
  }
}

export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindings {
  /**
  * output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#output_config DataLossPreventionJobTrigger#output_config}
  */
  readonly outputConfig: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig[];
}

function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    output_config: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigToTerraform)(struct!.outputConfig),
  }
}

export interface DataLossPreventionJobTriggerInspectJobActions {
  /**
  * save_findings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#save_findings DataLossPreventionJobTrigger#save_findings}
  */
  readonly saveFindings: DataLossPreventionJobTriggerInspectJobActionsSaveFindings[];
}

function dataLossPreventionJobTriggerInspectJobActionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    save_findings: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobActionsSaveFindingsToTerraform)(struct!.saveFindings),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference {
  /**
  * The dataset ID of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#dataset_id DataLossPreventionJobTrigger#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#table_id DataLossPreventionJobTrigger#table_id}
  */
  readonly tableId: string;
}

function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions {
  /**
  * table_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#table_reference DataLossPreventionJobTrigger#table_reference}
  */
  readonly tableReference: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference[];
}

function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_reference: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceToTerraform)(struct!.tableReference),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet {
  /**
  * The name of a Cloud Storage bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#bucket_name DataLossPreventionJobTrigger#bucket_name}
  */
  readonly bucketName: string;
  /**
  * A list of regular expressions matching file paths to exclude. All files in the bucket that match at
least one of these regular expressions will be excluded from the scan.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#exclude_regex DataLossPreventionJobTrigger#exclude_regex}
  */
  readonly excludeRegex?: string[];
  /**
  * A list of regular expressions matching file paths to include. All files in the bucket
that match at least one of these regular expressions will be included in the set of files,
except for those that also match an item in excludeRegex. Leaving this field empty will
match all files by default (this is equivalent to including .* in the list)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#include_regex DataLossPreventionJobTrigger#include_regex}
  */
  readonly includeRegex?: string[];
}

function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    exclude_regex: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeRegex),
    include_regex: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeRegex),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet {
  /**
  * The Cloud Storage url of the file(s) to scan, in the format 'gs://<bucket>/<path>'. Trailing wildcard
in the path is allowed.

If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned
non-recursively (content in sub-directories will not be scanned). This means that 'gs://mybucket/' is
equivalent to 'gs://mybucket/*', and 'gs://mybucket/directory/' is equivalent to 'gs://mybucket/directory/*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#url DataLossPreventionJobTrigger#url}
  */
  readonly url?: string;
  /**
  * regex_file_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#regex_file_set DataLossPreventionJobTrigger#regex_file_set}
  */
  readonly regexFileSet?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet[];
}

function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    regex_file_set: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetToTerraform)(struct!.regexFileSet),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions {
  /**
  * Max number of bytes to scan from a file. If a scanned file's size is bigger than this value
then the rest of the bytes are omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#bytes_limit_per_file DataLossPreventionJobTrigger#bytes_limit_per_file}
  */
  readonly bytesLimitPerFile?: number;
  /**
  * Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#bytes_limit_per_file_percent DataLossPreventionJobTrigger#bytes_limit_per_file_percent}
  */
  readonly bytesLimitPerFilePercent?: number;
  /**
  * List of file type groups to include in the scan. If empty, all files are scanned and available data
format processors are applied. In addition, the binary content of the selected files is always scanned as well.
Images are scanned only as binary if the specified region does not support image inspection and no fileTypes were specified. Possible values: ["BINARY_FILE", "TEXT_FILE", "IMAGE", "WORD", "PDF", "AVRO", "CSV", "TSV"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#file_types DataLossPreventionJobTrigger#file_types}
  */
  readonly fileTypes?: string[];
  /**
  * Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#files_limit_percent DataLossPreventionJobTrigger#files_limit_percent}
  */
  readonly filesLimitPercent?: number;
  /**
  * How to sample bytes if not all bytes are scanned. Meaningful only when used in conjunction with bytesLimitPerFile.
If not specified, scanning would start from the top. Possible values: ["TOP", "RANDOM_START"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#sample_method DataLossPreventionJobTrigger#sample_method}
  */
  readonly sampleMethod?: string;
  /**
  * file_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#file_set DataLossPreventionJobTrigger#file_set}
  */
  readonly fileSet: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet[];
}

function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bytes_limit_per_file: cdktf.numberToTerraform(struct!.bytesLimitPerFile),
    bytes_limit_per_file_percent: cdktf.numberToTerraform(struct!.bytesLimitPerFilePercent),
    file_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fileTypes),
    files_limit_percent: cdktf.numberToTerraform(struct!.filesLimitPercent),
    sample_method: cdktf.stringToTerraform(struct!.sampleMethod),
    file_set: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetToTerraform)(struct!.fileSet),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind {
  /**
  * The name of the Datastore kind.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId {
  /**
  * If not empty, the ID of the namespace to which the entities belong.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#namespace_id DataLossPreventionJobTrigger#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * The ID of the project to which the entities belong.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
}

function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions {
  /**
  * kind block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#kind DataLossPreventionJobTrigger#kind}
  */
  readonly kind: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind[];
  /**
  * partition_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#partition_id DataLossPreventionJobTrigger#partition_id}
  */
  readonly partitionId: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId[];
}

function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kind: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindToTerraform)(struct!.kind),
    partition_id: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdToTerraform)(struct!.partitionId),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField {
  /**
  * Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery.

For BigQuery: Required to filter out rows based on the given start and end times. If not specified and the table was
modified between the given start and end times, the entire table will be scanned. The valid data types of the timestamp
field are: INTEGER, DATE, TIMESTAMP, or DATETIME BigQuery column.

For Datastore. Valid data types of the timestamp field are: TIMESTAMP. Datastore entity will be scanned if the
timestamp property does not exist or its value is empty or invalid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

function dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig {
  /**
  * When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid
scanning files that have not been modified since the last time the JobTrigger executed. This will
be based on the time of the execution of the last run of the JobTrigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#enable_auto_population_of_timespan_config DataLossPreventionJobTrigger#enable_auto_population_of_timespan_config}
  */
  readonly enableAutoPopulationOfTimespanConfig?: boolean | cdktf.IResolvable;
  /**
  * Exclude files or rows newer than this value. If set to zero, no upper time limit is applied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#end_time DataLossPreventionJobTrigger#end_time}
  */
  readonly endTime?: string;
  /**
  * Exclude files or rows older than this value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#start_time DataLossPreventionJobTrigger#start_time}
  */
  readonly startTime?: string;
  /**
  * timestamp_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#timestamp_field DataLossPreventionJobTrigger#timestamp_field}
  */
  readonly timestampField: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField[];
}

function dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_auto_population_of_timespan_config: cdktf.booleanToTerraform(struct!.enableAutoPopulationOfTimespanConfig),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    timestamp_field: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldToTerraform)(struct!.timestampField),
  }
}

export interface DataLossPreventionJobTriggerInspectJobStorageConfig {
  /**
  * big_query_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#big_query_options DataLossPreventionJobTrigger#big_query_options}
  */
  readonly bigQueryOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions[];
  /**
  * cloud_storage_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#cloud_storage_options DataLossPreventionJobTrigger#cloud_storage_options}
  */
  readonly cloudStorageOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions[];
  /**
  * datastore_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#datastore_options DataLossPreventionJobTrigger#datastore_options}
  */
  readonly datastoreOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions[];
  /**
  * timespan_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#timespan_config DataLossPreventionJobTrigger#timespan_config}
  */
  readonly timespanConfig?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig[];
}

function dataLossPreventionJobTriggerInspectJobStorageConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    big_query_options: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsToTerraform)(struct!.bigQueryOptions),
    cloud_storage_options: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsToTerraform)(struct!.cloudStorageOptions),
    datastore_options: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsToTerraform)(struct!.datastoreOptions),
    timespan_config: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigToTerraform)(struct!.timespanConfig),
  }
}

export interface DataLossPreventionJobTriggerInspectJob {
  /**
  * The name of the template to run when this job is triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#inspect_template_name DataLossPreventionJobTrigger#inspect_template_name}
  */
  readonly inspectTemplateName: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#actions DataLossPreventionJobTrigger#actions}
  */
  readonly actions: DataLossPreventionJobTriggerInspectJobActions[];
  /**
  * storage_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#storage_config DataLossPreventionJobTrigger#storage_config}
  */
  readonly storageConfig: DataLossPreventionJobTriggerInspectJobStorageConfig[];
}

function dataLossPreventionJobTriggerInspectJobToTerraform(struct?: DataLossPreventionJobTriggerInspectJob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inspect_template_name: cdktf.stringToTerraform(struct!.inspectTemplateName),
    actions: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobActionsToTerraform)(struct!.actions),
    storage_config: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigToTerraform)(struct!.storageConfig),
  }
}

export interface DataLossPreventionJobTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#create DataLossPreventionJobTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#delete DataLossPreventionJobTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#update DataLossPreventionJobTrigger#update}
  */
  readonly update?: string;
}

function dataLossPreventionJobTriggerTimeoutsToTerraform(struct?: DataLossPreventionJobTriggerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface DataLossPreventionJobTriggerTriggersSchedule {
  /**
  * With this option a job is started a regular periodic basis. For example: every day (86400 seconds).

A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.

This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#recurrence_period_duration DataLossPreventionJobTrigger#recurrence_period_duration}
  */
  readonly recurrencePeriodDuration?: string;
}

function dataLossPreventionJobTriggerTriggersScheduleToTerraform(struct?: DataLossPreventionJobTriggerTriggersSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    recurrence_period_duration: cdktf.stringToTerraform(struct!.recurrencePeriodDuration),
  }
}

export interface DataLossPreventionJobTriggerTriggers {
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html#schedule DataLossPreventionJobTrigger#schedule}
  */
  readonly schedule?: DataLossPreventionJobTriggerTriggersSchedule[];
}

function dataLossPreventionJobTriggerTriggersToTerraform(struct?: DataLossPreventionJobTriggerTriggers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule: cdktf.listMapper(dataLossPreventionJobTriggerTriggersScheduleToTerraform)(struct!.schedule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html google_data_loss_prevention_job_trigger}
*/
export class DataLossPreventionJobTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_data_loss_prevention_job_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger.html google_data_loss_prevention_job_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLossPreventionJobTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: DataLossPreventionJobTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_job_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._parent = config.parent;
    this._status = config.status;
    this._inspectJob = config.inspectJob;
    this._timeouts = config.timeouts;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_run_time - computed: true, optional: false, required: false
  public get lastRunTime() {
    return this.getStringAttribute('last_run_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // inspect_job - computed: false, optional: true, required: false
  private _inspectJob?: DataLossPreventionJobTriggerInspectJob[];
  public get inspectJob() {
    return this.interpolationForAttribute('inspect_job') as any;
  }
  public set inspectJob(value: DataLossPreventionJobTriggerInspectJob[] ) {
    this._inspectJob = value;
  }
  public resetInspectJob() {
    this._inspectJob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectJobInput() {
    return this._inspectJob
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLossPreventionJobTriggerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataLossPreventionJobTriggerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers: DataLossPreventionJobTriggerTriggers[];
  public get triggers() {
    return this.interpolationForAttribute('triggers') as any;
  }
  public set triggers(value: DataLossPreventionJobTriggerTriggers[]) {
    this._triggers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      parent: cdktf.stringToTerraform(this._parent),
      status: cdktf.stringToTerraform(this._status),
      inspect_job: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobToTerraform)(this._inspectJob),
      timeouts: dataLossPreventionJobTriggerTimeoutsToTerraform(this._timeouts),
      triggers: cdktf.listMapper(dataLossPreventionJobTriggerTriggersToTerraform)(this._triggers),
    };
  }
}
