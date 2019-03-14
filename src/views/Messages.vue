<template>
  <div class="messages-page-container">
    <div class="container">
      <div class="row justify-content-center">
        <h1>Messages</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid">
            <div class="col-lg-4">
              <card class="border-0" hover shadow body-classes="py-5">
                <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                </icon>
                <h6 class="text-primary text-uppercase">Connection Request</h6>
                <p class="description mt-3">
                  Faraday School of Excellence
                </p>
                <div>
                  <badge type="primary" rounded>school</badge>
                  <badge type="primary" rounded>Indianapolis, IN</badge>
                  <badge type="primary" rounded>verified</badge>
                </div>
                <base-button tag="a" href="#" type="primary" class="mt-4">
                  Accept
                </base-button>
                <base-button tag="a" href="#" type="primary" class="mt-4">
                  Reject
                </base-button>
              </card>
            </div>
            <!-- <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                    </icon>
                    <h6 class="text-success text-uppercase">Build Something</h6>
                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                        4 that includes the most important components and features.</p>
                    <div>
                        <badge type="success" rounded>business</badge>
                        <badge type="success" rounded>vision</badge>
                        <badge type="success" rounded>success</badge>
                    </div>
                    <base-button tag="a" href="#" type="success" class="mt-4">
                        Learn more
                    </base-button>
                </card>
            </div>
            <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                    </icon>
                    <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                        4 that includes the most important components and features.</p>
                    <div>
                        <badge type="warning" rounded>marketing</badge>
                        <badge type="warning" rounded>product</badge>
                        <badge type="warning" rounded>launch</badge>
                    </div>
                    <base-button tag="a" href="#" type="warning" class="mt-4">
                        Learn more
                    </base-button>
                </card>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
