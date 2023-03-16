import React from "react";

function AppContentCard(props) {
  const { message, content, title, index, target, id } = props;
  return (
    <div id={id} class="card">
      {props.children}
      <div class="card-header">{title}</div>
      <div class="card-body p-0">
        <div
          id="introContentDiv"
          dangerouslySetInnerHTML={{
            __html: `${message}`,
          }}
        />

        {content !== "" && (
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <div
                id={index}
                class="accordion-collapse collapse"
                aria-labelledby={`flush${index}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  class="accordion-body"
                  style={{ paddingTop: 0, paddingLeft: 10 }}
                >
                  <div
                    id="ContentDiv"
                    dangerouslySetInnerHTML={{
                      __html: `${content}`,
                    }}
                  />
                </div>
              </div>

              <h2 class="accordion-header" id={`flush${index}`}>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={target}
                  aria-expanded="false"
                  aria-controls={index}
                >
                  Read more
                </button>
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppContentCard;
