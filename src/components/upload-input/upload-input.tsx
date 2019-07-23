import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'upload-input',
  styleUrl: 'upload-input.css',
  shadow: false,
})
export class UploadInput {

  @Prop() name: string = 'upload-input'
  @State() selectedFiles: FileList

  private fileInput?: HTMLInputElement

  buttonClick() {
    this.fileInput.click()
  }

  onFileInputChange(input: HTMLInputElement) {
    this.selectedFiles = input.files
  }

  render() {
    return (
      <div class="upload-input">
        <div>
          <button
            type="button"
            class="btn"
            onClick={() => this.buttonClick()}
          >{this.selectedFiles && this.selectedFiles.length > 0 ? this.selectedFiles.length + ' Selected' : 'Upload'}</button>
          <input
            type="file"
            multiple
            name={this.name}
            ref={el => this.fileInput = el as HTMLInputElement}
            onChange={(e: UIEvent) => this.onFileInputChange(e.target as HTMLInputElement)}
          />
        </div>
      </div>
    )
  }
}
