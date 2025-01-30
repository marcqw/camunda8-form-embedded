import { Camunda8 } from '@camunda8/sdk'

const c8 = new Camunda8()
const zeebe = c8.getZeebeGrpcApiClient();

// Function to start a Camunda process
export const startCamundaProcess = async (bpmnProcessId, variables) => {
  try {
    const processInstance = await zeebe.createProcessInstanceWithResult({
      bpmnProcessId: bpmnProcessId,
      variables: {
        ...variables,
      },
    });
    return processInstance;
  } catch (error) {
    console.error('Failed to start Camunda process', error);
    throw error;
  }
}