/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin
// TaskExecutionMetadataInstanceType : Includes the type of machine used for this specific task execution.   - DEFAULT: The default instance type configured for the flyte application platform.  - INTERRUPTIBLE: The instance type configured for interruptible tasks.
type TaskExecutionMetadataInstanceType string

// List of TaskExecutionMetadataInstanceType
const (
	TaskExecutionMetadataInstanceTypeDEFAULT_ TaskExecutionMetadataInstanceType = "DEFAULT"
	TaskExecutionMetadataInstanceTypeINTERRUPTIBLE TaskExecutionMetadataInstanceType = "INTERRUPTIBLE"
)